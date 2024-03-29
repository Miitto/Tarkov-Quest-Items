import { RefObject, useRef, useEffect, useState } from "react";
import { Item, Wipe } from "../types";
import styles from "./WipePanel.module.scss";
import { invoke } from "@tauri-apps/api/tauri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { readTextFile, readDir, BaseDirectory } from "@tauri-apps/api/fs";
import queryWipe from "../lib/script/api/fetch";

export function WipePanel({
    activeWipe,
    setActiveWipe,
}: {
    activeWipe: number;
    setActiveWipe: (idx: number) => void;
}) {
    const [wipes, setWipes] = useState<Wipe[]>([]);
    const [wipeData, setWipeData] = useState<string[]>([]);

    let createDialog: RefObject<HTMLDialogElement> = useRef(null);
    let deleteDialog: RefObject<HTMLDialogElement> = useRef(null);

    async function pickWipe(wipeId: number) {
        setActiveWipe(wipeId);
        return await invoke<number>("pick_wipe", {
            wipeId: wipeId,
        });
    }

    useEffect(() => {
        invoke<Wipe[]>("get_all_wipes").then((wipes): void => {
            let activeWipe = parseInt(
                localStorage.getItem("activeWipe") ?? wipes[0].id.toString()
            );
            setWipes(wipes as Wipe[]);
            if (wipes.length > 0) pickWipe(activeWipe);
        });
        getWipeData();
    }, []);

    function newWipe() {
        getWipeData();
        createDialog?.current?.showModal();
    }

    function removeWipe() {
        deleteDialog?.current?.showModal();
    }

    async function createWipe(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let form = event.target as HTMLFormElement;
        let name = (form.elements[0] as HTMLInputElement).value;

        let wipeData = (form.elements[1] as HTMLSelectElement).value;

        let data: any;

        if (wipeData == "query") {
            data = await queryWipe();
        } else {
            data = JSON.parse(
                (await readTextFile(`./src/data/${wipeData}.json`)) ?? {
                    data: { tasks: [] },
                }
            ).data;
        }
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
                objective.dogtag_level = objective.dogTagLevel ?? 0;
                objective.min_durability = objective.minDurability ?? 0;
                objective.max_durability = objective.maxDurability ?? 100;

                // Data Source has some Errors, so attempt to fix them from descriptions
                if (objective.description.includes("50-")) {
                    objective.min_durability = 50;
                }

                if (objective.description.includes("-50")) {
                    objective.max_durability = 50;
                }

                objective.task = task.id;
                objective.completed = false;
            });
        });

        invoke<Wipe>("create_wipe", {
            name: name,
        }).then(async (wipe) => {
            setWipes([wipe as Wipe, ...wipes]);
            await invoke<number>("pick_wipe", {
                wipeId: wipe.id,
            });
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
                    objective.wipe = wipe.id;
                    objective.collected = 0;
                    return objective;
                })
            );
            await invoke("create_items", {
                items: items,
            });

            await invoke("create_objectives", {
                objectives: objectives,
            });

            setActiveWipe(wipe.id);
        });
    }

    async function deleteWipe() {
        await invoke("delete_wipe", {
            wipeId: activeWipe,
        });
        setWipes(wipes.filter((wipe: Wipe) => activeWipe != wipe.id));
        deleteDialog?.current?.close();
    }

    function getWipeData() {
        readDir(`wipe_data`, {
            dir: BaseDirectory.Resource,
        }).then((files) => {
            setWipeData(
                files
                    .filter((file) => file.name!.endsWith(".json"))
                    .map((file) => file.name!.replace(".json", ""))
                    .sort((a, b) => {
                        if (
                            !isNaN(parseFloat(a)) &&
                            !isNaN(parseFloat(b)) &&
                            parseFloat(a) > parseFloat(b)
                        )
                            return -1;
                        return a.localeCompare(b);
                    })
            );
        });
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
                    <label>Wipe Data:</label>
                    <select value={wipeData[0]}>
                        {wipeData.map((name) => {
                            return (
                                <option
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </option>
                            );
                        })}
                        <option value="query">Query</option>
                    </select>
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
