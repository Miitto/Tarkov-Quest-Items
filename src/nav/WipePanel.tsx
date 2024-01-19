import { RefObject, useRef, useEffect, useState } from "react";
import { Item, Wipe } from "../types";
import styles from "./WipePanel.module.scss";
import { invoke } from "@tauri-apps/api/tauri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tmp } from "../tmp";

export function WipePanel({
    activeWipe,
    setActiveWipe,
}: {
    activeWipe: number;
    setActiveWipe: (idx: number) => void;
}) {
    const [wipes, setWipes] = useState<Wipe[]>([]);

    let createDialog: RefObject<HTMLDialogElement> = useRef(null);
    let deleteDialog: RefObject<HTMLDialogElement> = useRef(null);

    function pickWipe(wipeId: number) {
        setActiveWipe(wipeId);
        invoke("pick_wipe", {
            wipeId: wipeId,
        });
    }

    useEffect(() => {
        invoke<Wipe[]>("get_all_wipes").then((wipes): void => {
            setWipes(wipes as Wipe[]);
            if (wipes.length > 0) pickWipe(wipes[0].id);
            if (wipes.length > 0)
                invoke("pick_wipe", {
                    wipeId: wipes[0].id,
                });
        });
    }, []);

    function newWipe() {
        createDialog?.current?.showModal();
    }

    function removeWipe() {
        deleteDialog?.current?.showModal();
    }

    async function createWipe(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // let res = await fetch("https://api.tarkov.dev/graphql", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify({
        //         query: `{
        //          tasks {
        //            id
        //            name
        //            taskImageLink
        //            trader {
        //              name
        //            }
        //            minPlayerLevel
        //            objectives {
        //              id
        //              description
        //              optional
        //              __typename
        //              ... on TaskObjectiveItem {
        //                count
        //                foundInRaid
        //                dogTagLevel
        //                minDurability
        //                maxDurability
        //                requiredKeys {
        //                  id
        //                  name
        //                  iconLink
        //                }
        //                item {
        //                  id
        //                  name
        //                  iconLink
        //                }
        //              }
        //            }
        //          }
        //        }`,
        //     }),
        // });
        // let data = (await res.json()).data;

        let data = tmp.data;

        let items: Item[] = [];

        data.tasks.forEach((task: any) => {
            task.vendor = task.trader.name;
            delete task.trader;
            task.min_level = task.minPlayerLevel;
            delete task.minPlayerLevel;

            if (!task.hasOwnProperty("image")) task.image = "";

            task.objectives.forEach((objective: any) => {
                if (!objective.hasOwnProperty("count")) objective.count = 0;
                if (!objective.hasOwnProperty("item")) objective.item = null;
                else {
                    objective.item.image = objective.item.iconLink;
                    delete objective.item.iconLink;
                    items.push(objective.item);
                }
                if (!objective.hasOwnProperty("foundInRaid"))
                    objective.foundInRaid = false;
                objective.found_in_raid = objective.foundInRaid;
                delete objective.foundInRaid;
                objective.task = task.id;
                objective.completed = false;
            });
        });

        invoke<Wipe>("create_wipe", {
            name: (event.target as any).elements[0].value,
        }).then(async (wipe) => {
            setWipes([wipe as Wipe, ...wipes]);
            pickWipe(wipe.id);
            createDialog?.current?.close();
            data.tasks.forEach((task: any) => {
                task.wipe = wipe.id;
            });

            await invoke("create_tasks", {
                wipeId: wipe.id,
                tasks: data.tasks,
            });

            let objectives = data.tasks.flatMap((task: any) =>
                task.objectives.map((objective: any) => {
                    objective.item = objective.item?.id;
                    objective.task = task.id;
                    objective.wipe = activeWipe;
                    return objective;
                })
            );
            await invoke("create_items", {
                items: items,
            });

            await invoke("create_objectives", {
                objectives: objectives,
            });
        });
    }

    async function deleteWipe() {
        await invoke("delete_wipe", {
            wipeId: activeWipe,
        });
        setWipes(wipes.filter((wipe: Wipe) => activeWipe != wipe.id));
        deleteDialog?.current?.close();
    }

    return (
        <nav className={styles.nav}>
            <ul>
                {wipes.map((wipe: Wipe) => {
                    return (
                        <WipeLine
                            wipe={wipe}
                            active={wipe.id == activeWipe}
                            click={() => pickWipe(wipe.id)}
                            key={wipe.id}
                        />
                    );
                })}
            </ul>
            <span>
                <div className="tooltip">
                    <button onClick={newWipe}>
                        <FontAwesomeIcon icon="square-plus" />
                    </button>
                    <span className="left tooltiptext">New Wipe</span>
                </div>
                <div className="tooltip">
                    <button onClick={removeWipe}>
                        <FontAwesomeIcon icon="trash" />
                    </button>
                    <span className="tooltiptext">Delete Wipe</span>
                </div>
            </span>
            <dialog
                ref={createDialog}
                onClick={(event) => {
                    if (event.target == createDialog.current)
                        createDialog?.current?.close();
                }}
            >
                <form onSubmit={createWipe}>
                    <label>Name:</label>
                    <input type="text" />
                    <button
                        type="submit"
                        className="tarkov-btn"
                    >
                        Create
                    </button>
                </form>
            </dialog>
            <dialog
                ref={deleteDialog}
                onClick={(event) => {
                    if (event.target == deleteDialog.current)
                        deleteDialog?.current?.close();
                }}
            >
                <div>
                    <label>Are you Sure?</label>
                    <button onClick={deleteWipe}>
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </div>
            </dialog>
        </nav>
    );
}

function WipeLine({
    wipe,
    active,
    click,
}: {
    wipe: Wipe;
    active: boolean;
    click: () => void;
}) {
    return (
        <li>
            <button
                className={active ? styles.active : ""}
                onClick={click}
            >
                {wipe.name}
            </button>
        </li>
    );
}