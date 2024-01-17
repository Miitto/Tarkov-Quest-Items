import { RefObject, useRef, useEffect, useState } from "react";
import { Item, Wipe } from "../types";
import styles from "./WipePanel.module.scss";
import { invoke } from "@tauri-apps/api/tauri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tmp } from "../tmp";

export function WipePanel() {
    const [wipes, setWipes] = useState<Wipe[]>([]);
    const [activeWipe, setActiveWipe] = useState(0);

    let createDialog: RefObject<HTMLDialogElement> = useRef(null);
    let deleteDialog: RefObject<HTMLDialogElement> = useRef(null);

    useEffect(() => {
        invoke("get_all_wipes").then((wipes) => {
            setWipes(wipes as Wipe[]);
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

        console.log("Clicked");

        // let res = await fetch("https://api.tarkov.dev/graphql", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify({
        //         query: `{
        //                     tasks {
        //                         id
        //                         name
        //                         trader {
        //                             name
        //                         }
        //                         minPlayerLevel
        //                         objectives {
        //                             id
        //                             description
        //                             optional
        //                             ... on TaskObjectiveItem {
        //                                 count
        //                                 foundInRaid
        //                                 item {
        //                                     id
        //                                     name
        //                                     iconLink
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }`,
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

            task.objectives.forEach((objective: any) => {
                if (!objective.hasOwnProperty("count")) objective.count = 0;
                if (!objective.hasOwnProperty("item")) objective.item = null;
                if (!objective.hasOwnProperty("foundInRaid"))
                    objective.foundInRaid = false;
                objective.found_in_raid = objective.foundInRaid;
                delete objective.foundInRaid;
                objective.task = task.id;
                items.push(objective.item);
            });
        });

        console.log(items);

        invoke<Wipe>("create_wipe", {
            name: (event.target as any).elements[0].value,
        }).then(async (wipe) => {
            setWipes([wipe as Wipe, ...wipes]);
            setActiveWipe(0);
            createDialog?.current?.close();
            data.tasks.forEach((task: any) => {
                task.wipe = wipe.id;
            });

            await invoke("create_tasks", {
                wipeId: wipe.id,
                tasks: data.tasks,
            });

            await invoke("create_items", {
                items: items,
            });
        });
    }

    async function deleteWipe() {
        await invoke("delete_wipe", {
            wipeId: wipes[activeWipe].id,
        });
        setWipes(wipes.filter((_: Wipe, idx) => activeWipe != idx));
        deleteDialog?.current?.close();
    }

    return (
        <nav className={styles.nav}>
            <ul>
                {wipes.map((wipe: Wipe, idx: number) => {
                    return (
                        <WipeLine
                            wipe={wipe}
                            active={idx == activeWipe}
                            click={() => setActiveWipe(idx)}
                            key={wipe.id}
                        />
                    );
                })}
            </ul>
            <span>
                <button onClick={newWipe}>
                    <FontAwesomeIcon icon="square-plus" />
                </button>
                <button onClick={removeWipe}>
                    <FontAwesomeIcon icon="trash" />
                </button>
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
