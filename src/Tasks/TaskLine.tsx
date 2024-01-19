import { useState } from "react";
import { CollatedTask, Objective } from "../types";
import styles from "./Tasks.module.scss";
import { ObjectiveLine } from "./ObjectiveLine";

export function TaskLine({
    task,
    setMainDialog,
}: {
    task: CollatedTask;
    setMainDialog: (dialog: JSX.Element) => void;
}) {
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
            <div className={`${open ? styles.show : ""} ${styles.objList}`}>
                {taskState.objectives.map((objective: Objective) => {
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
