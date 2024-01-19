import { invoke } from "@tauri-apps/api";
import { useEffect, useMemo, useState } from "react";
import { CollatedTask, Objective, Task } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Tasks.module.scss";
import { TaskLine } from "./TaskLine";

export function TasksPanel({ activeWipe }: { activeWipe: number }) {
    const [tasks, setTasks] = useState<CollatedTask[]>([]);
    const [filterName, setFilterName] = useState("");
    const [sort, setSort] = useState("lvl");
    const [MainDialog, setMainDialog] = useState(<DefaultDialog />);

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
    }, [activeWipe]);
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
                <TaskPage
                    tasks={filteredTasks}
                    setMainDialog={setMainDialog}
                />
            </ul>
            {MainDialog}
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

function TaskPage({
    tasks,
    setMainDialog,
}: {
    tasks: CollatedTask[];
    setMainDialog: (dialog: JSX.Element) => void;
}) {
    return (
        <>
            {tasks.map((task: CollatedTask) => {
                return (
                    <TaskLine
                        key={`${task.id}${task.completed}`}
                        task={task}
                        setMainDialog={setMainDialog}
                    />
                );
            })}
        </>
    );
}

function DefaultDialog() {
    return <dialog></dialog>;
}
