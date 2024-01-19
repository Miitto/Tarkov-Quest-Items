import { invoke } from "@tauri-apps/api";
import { useEffect, useMemo, useState } from "react";
import { CollatedTask, Objective, Task } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Tasks.module.scss";

export function TasksPanel({ activeWipe }: { activeWipe: number }) {
    const [tasks, setTasks] = useState<CollatedTask[]>([]);
    const [filterName, setFilterName] = useState("");
    const [sort, setSort] = useState("lvl");

    const filteredTasks = useMemo(() => {
        return tasks
            .filter((task) => {
                return task.name
                    .toLowerCase()
                    .includes(filterName.toLowerCase());
            })
            .sort((a, b) => {
                if (sort.startsWith("name")) {
                    if (sort.endsWith("-")) {
                        return b.name.localeCompare(a.name);
                    } else {
                        return a.name.localeCompare(b.name);
                    }
                }
                if (sort.startsWith("completed")) {
                    if (a.completed && b.completed) return 0;
                    if (sort.endsWith("-")) {
                        return a.completed ? 1 : -1;
                    }
                    return b.completed ? 1 : -1;
                }
                if (sort.startsWith("lvl")) {
                    if (a.min_level === b.min_level)
                        return a.name.localeCompare(b.name);
                    if (sort.endsWith("-")) {
                        return b.min_level - a.min_level;
                    } else {
                        return a.min_level - b.min_level;
                    }
                }
                return 0;
            });
    }, [tasks, filterName, sort]);

    useEffect(() => {
        invoke<Task[]>("get_all_tasks").then(async (tasks) => {
            let collated: CollatedTask[] = await Promise.all(
                tasks.map(async (task: Task) => {
                    let i: CollatedTask = JSON.parse(JSON.stringify(task));

                    let objectives = await invoke<Objective[]>(
                        "get_task_objectives",
                        {
                            id: task.id,
                        }
                    );

                    i.objectives = objectives;
                    i.completed = objectives.filter((o) => o.completed).length;

                    return i;
                })
            );
            collated.sort((a, b) => b.name.localeCompare(a.name));
            setTasks(collated);
        });
    }, []);
    return (
        <>
            <FilterBar
                filterName={filterName}
                setFilterName={setFilterName}
            />
            <ul className={styles.taskList}>
                <TitleBar
                    sort={sort}
                    setSort={setSort}
                />
                <TaskPage tasks={filteredTasks} />
            </ul>
        </>
    );
}

function FilterBar({
    filterName,
    setFilterName,
}: {
    filterName: string;
    setFilterName: (name: string) => void;
}) {
    return (
        <div className={styles.filterBar}>
            <input
                type="text"
                placeholder="Filter Name..."
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
            />
        </div>
    );
}

function TitleBar({
    sort,
    setSort,
}: {
    sort: string;
    setSort: (sort: string) => void;
}) {
    return (
        <div className={styles.titleBar}>
            <br />
            <button
                onClick={() => {
                    if (sort.startsWith("name")) {
                        if (sort.endsWith("-")) {
                            setSort("name");
                        } else {
                            setSort("name-");
                        }
                    } else {
                        setSort("name");
                    }
                }}
            >
                Name
                {sort.startsWith("name") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
            <button
                onClick={() => {
                    if (sort.startsWith("lvl")) {
                        if (sort.endsWith("-")) {
                            setSort("lvl");
                        } else {
                            setSort("lvl-");
                        }
                    } else {
                        setSort("lvl");
                    }
                }}
            >
                Lvl
                {sort.startsWith("lvl") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
            <button
                onClick={() => {
                    if (sort.startsWith("completed")) {
                        if (sort.endsWith("-")) {
                            setSort("completed");
                        } else {
                            setSort("completed-");
                        }
                    } else {
                        setSort("completed");
                    }
                }}
            >
                Done
                {sort.startsWith("completed") ? (
                    sort.endsWith("-") ? (
                        <FontAwesomeIcon icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon icon="chevron-down" />
                    )
                ) : (
                    ""
                )}
            </button>
        </div>
    );
}

function TaskPage({ tasks }: { tasks: CollatedTask[] }) {
    return (
        <>
            {tasks.map((task: CollatedTask) => {
                return (
                    <TaskLine
                        key={`${task.id}${task.completed}`}
                        task={task}
                    />
                );
            })}
        </>
    );
}

function TaskLine({ task }: { task: CollatedTask }) {
    const [open, setOpen] = useState(false);
    const [taskState, setTaskState] = useState<CollatedTask>(task);
    return (
        <span
            className={`${styles.taskLine} ${
                taskState.completed == taskState.objectives.length
                    ? styles.completed
                    : ""
            }`}
        >
            <button onClick={() => setOpen(!open)}>
                <img src={taskState.image} />
                <p>{taskState.name}</p>
                <p>{taskState.min_level}</p>
                <p>
                    {taskState.completed}/{taskState.objectives.length}
                </p>
            </button>
            <div className={open ? styles.show : ""}>
                {taskState.objectives.map((objective: Objective) => {
                    return (
                        <ObjectiveLine
                            key={`${objective.id}${objective.completed}${objective.found_in_raid}`}
                            objective={objective}
                            taskState={taskState}
                            taskStateSetter={setTaskState}
                        />
                    );
                })}
            </div>
        </span>
    );
}

function ObjectiveLine({
    objective,
    taskState,
    taskStateSetter,
}: {
    objective: Objective;
    taskState: CollatedTask;
    taskStateSetter: (task: CollatedTask) => void;
}) {
    const [objectiveState, setObjectiveState] = useState<Objective>(objective);
    useEffect(() => {
        setObjectiveState(objective);
    }, [objective]);

    function updateTaskState(obj: Objective) {
        let newTaskState = JSON.parse(JSON.stringify(taskState));
        newTaskState.objectives = newTaskState.objectives.map(
            (o: Objective) => {
                if (o.id === obj.id) {
                    return obj;
                }
                return o;
            }
        );
        newTaskState.completed = newTaskState.objectives.filter(
            (o: Objective) => o.completed
        ).length;
        taskStateSetter(newTaskState);
    }

    function updateObjectiveState(e: React.ChangeEvent<HTMLInputElement>) {
        invoke<Objective>("update_objective", {
            id: objective.id,
            completed: e.target.checked,
        }).then((obj: Objective) => {
            updateTaskState(obj);
        });
    }

    return (
        <span
            className={`${styles.objectiveLine} ${
                objectiveState.completed ? styles.completed : ""
            }`}
        >
            <p>{objectiveState.description}</p>
            <input
                type="checkbox"
                checked={objectiveState.completed}
                onChange={updateObjectiveState}
            />
        </span>
    );
}
