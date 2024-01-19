import { useEffect, useRef, useState } from "react";
import { CollatedTask, Objective } from "../types";
import styles from "./Tasks.module.scss";
import { ObjectiveLine } from "./ObjectiveLine";

export function TaskLine({
    tasks,
    setMainDialog,
    setSize,
    index,
}: {
    tasks: CollatedTask[];
    setMainDialog: (dialog: JSX.Element) => void;
    setSize: (idx: number, size: number) => void;
    index: number;
}) {
    const task = tasks[index] ?? null;
    const [taskState, setTaskState] = useState<CollatedTask | null>(task);
    const [height, setHeight] = useState(0);

    function toggleOpen() {
        setSize(index, 64 * (taskState?.objectives.length ?? 0) + 34);
    }

    let div = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(div.current?.clientHeight ?? 0);
    });

    return (
        <span
            className={`${styles.taskLine} ${
                taskState?.completed == taskState?.objectives.length
                    ? styles.completed
                    : ""
            }`}
        >
            <button onClick={toggleOpen}>
                <img src={taskState?.image} />
                <p>{taskState?.name}</p>
                <p>{taskState?.min_level}</p>
                <p>
                    {taskState?.completed}/{taskState?.objectives.length}
                </p>
            </button>
            <div
                ref={div}
                className={`${height != 0 ? styles.show : ""} ${
                    styles.objList
                }`}
            >
                {taskState?.objectives.map((objective: Objective) => {
                    return (
                        <ObjectiveLine
                            key={`${objective.id}${objective.completed}${objective.found_in_raid}`}
                            objective={objective}
                            taskState={taskState}
                            taskStateSetter={setTaskState}
                            setMainDialog={setMainDialog}
                        />
                    );
                })}
            </div>
        </span>
    );
}
