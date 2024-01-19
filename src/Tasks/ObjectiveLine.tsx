import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import { CollatedObjective, CollatedTask, Objective } from "../types";
import styles from "./Tasks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function ObjectiveLine({
    objective,
    taskState,
    taskStateSetter,
    setTaskDialog,
}: {
    objective: Objective;
    taskState: CollatedTask;
    taskStateSetter: (task: CollatedTask) => void;
    setTaskDialog: (dialog: JSX.Element) => void;
}) {
    const [objectiveState, setObjectiveState] = useState<CollatedObjective>(
        (() => {
            let obj: any = objective;
            obj.in_stash = 0;
            return obj;
        })()
    );
    useEffect(() => {
        collateObj(objective).then((collatedObj: CollatedObjective) => {
            setObjectiveState(collatedObj);
        });
    }, [objective]);

    function updateTaskState(obj: CollatedObjective) {
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
            collateObj(obj).then((collatedObj: CollatedObjective) => {
                updateTaskState(collatedObj);
            });
        });
    }

    async function collateObj(obj: Objective): Promise<CollatedObjective> {
        let collatedObj: CollatedObjective = JSON.parse(JSON.stringify(obj));
        if (obj.item) {
            let quantity = await invoke<number>("get_collected_quantity", {
                id: obj.item,
                fir: obj.found_in_raid,
            });
            let image = await invoke<string>("get_item_image", {
                id: obj.item,
            });
            collatedObj.in_stash = quantity;
            collatedObj.itemImage = image;
        }
        return collatedObj;
    }

    function assignItem(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        if (!event.ctrlKey) {
            invoke<Objective>("assign", {
                id: objective.id,
            })
                .then((obj: Objective) => {
                    collateObj(obj).then((collatedObj: CollatedObjective) => {
                        updateTaskState(collatedObj);
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            setTaskDialog(<AddItemDialog />);
        }
    }

    function unassignItem(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        if (!event.ctrlKey) {
            invoke<Objective>("unassign", {
                id: objective.id,
            })
                .then((obj: Objective) => {
                    collateObj(obj).then((collatedObj: CollatedObjective) => {
                        updateTaskState(collatedObj);
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            setTaskDialog(<RemoveItemDialog />);
        }
    }

    function AddItemDialog() {
        const addItemDialog = React.useRef<HTMLDialogElement>(null);
        const [itemCount, setItemCount] = React.useState(1);

        useEffect(() => {
            addItemDialog.current?.showModal();
        }, []);

        function addItem(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            invoke<Objective>("assign_quantity", {
                id: objective.id,
                quantity: itemCount,
            })
                .then((obj: Objective) => {
                    collateObj(obj).then((collatedObj: CollatedObjective) => {
                        updateTaskState(collatedObj);
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
            addItemDialog.current?.close();
        }

        return (
            <dialog
                ref={addItemDialog}
                className={styles.taskDialog}
                onClick={(e) => {
                    if (e.target === addItemDialog.current) {
                        addItemDialog.current?.close();
                    }
                }}
            >
                <form onSubmit={addItem}>
                    <img src={objectiveState.itemImage} />
                    <input
                        type="range"
                        min="1"
                        max={Math.min(
                            objectiveState.in_stash,
                            objectiveState.count - objectiveState.collected
                        )}
                        step="1"
                        value={itemCount}
                        onChange={(e) => setItemCount(+e.target.value)}
                    />
                    <input
                        type="number"
                        min="1"
                        max={Math.min(
                            objectiveState.in_stash,
                            objectiveState.count - objectiveState.collected
                        )}
                        value={itemCount}
                        onChange={(e) => setItemCount(+e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Add Items"
                    />
                </form>
                <button onClick={() => addItemDialog.current?.close()}>
                    Cancel
                </button>
            </dialog>
        );
    }

    function RemoveItemDialog() {
        const removeItemDialog = React.useRef<HTMLDialogElement>(null);
        const [itemCount, setItemCount] = React.useState(1);

        useEffect(() => {
            removeItemDialog.current?.showModal();
        }, []);

        function removeItem(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            invoke<Objective>("unassign_quantity", {
                id: objective.id,
                quantity: itemCount,
            })
                .then((obj: Objective) => {
                    collateObj(obj).then((collatedObj: CollatedObjective) => {
                        updateTaskState(collatedObj);
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
            removeItemDialog.current?.close();
        }

        return (
            <dialog
                ref={removeItemDialog}
                className={styles.taskDialog}
                onClick={(e) => {
                    if (e.target === removeItemDialog.current) {
                        removeItemDialog.current?.close();
                    }
                }}
            >
                <form onSubmit={removeItem}>
                    <img src={objectiveState.itemImage} />
                    <input
                        type="range"
                        min="1"
                        max={objectiveState.collected}
                        step="1"
                        value={itemCount}
                        onChange={(e) => setItemCount(+e.target.value)}
                    />
                    <input
                        type="number"
                        min="1"
                        max={objectiveState.collected}
                        value={itemCount}
                        onChange={(e) => setItemCount(+e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Remove Items"
                    />
                </form>
                <button onClick={() => removeItemDialog.current?.close()}>
                    Cancel
                </button>
            </dialog>
        );
    }

    const formatK = (n: number) => {
        if (n < 1000) return n;
        if (n >= 1000 && n < 1000000) return +(n / 1000).toFixed(1) + "K";
        if (n >= 1000000 && n < 1000000000)
            return +(n / 1000000).toFixed(1) + "M";
        if (n >= 1000000000 && n < 1000000000000)
            return +(n / 1000000000).toFixed(1) + "B";
        if (n >= 1000000000000) return +(n / 1000000000000).toFixed(1) + "T";
    };

    return (
        <span className={`${objectiveState.completed ? styles.completed : ""}`}>
            <p>{objectiveState.description}</p>
            {objectiveState.item && (
                <div>
                    <img src={objectiveState.itemImage} />
                    <button
                        onClick={unassignItem}
                        disabled={objectiveState.collected < 1}
                    >
                        <FontAwesomeIcon icon="minus" />
                    </button>
                    <button
                        onClick={assignItem}
                        disabled={
                            objectiveState.collected >= objectiveState.count ||
                            objectiveState.in_stash < 1
                        }
                    >
                        <FontAwesomeIcon icon="plus" />
                    </button>
                    <p>
                        {objectiveState.collected}/
                        {formatK(objectiveState.count)}
                    </p>
                    <p>({objectiveState.in_stash})</p>
                </div>
            )}
            <input
                type="checkbox"
                checked={objectiveState.completed}
                onChange={updateObjectiveState}
            />
        </span>
    );
}
