import { useEffect, useState } from "react";
import { CollatedItem, Item, Objective, Task } from "../types";
import { invoke } from "@tauri-apps/api";

import styles from "./Items.module.scss";

export function ItemsPanel() {
    const [items, setItems] = useState<CollatedItem[]>([]);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        (async () => {
            let onlyItems: Item[] = await invoke("get_all_items");

            let objectives: Objective[] = await invoke("get_all_objectives");

            let items: CollatedItem[] = [];
            await onlyItems.forEach(async (item: Item) => {
                let objectiveFir = objectives.find(
                    (objective: any) =>
                        objective.item == item.id && objective.found_in_raid
                );
                if (objectiveFir) {
                    let i = items.find((i) => i.id == item.id && i.foundInRaid);
                    if (!i) {
                        i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                        i.foundInRaid = true;
                        i.levelRequired = [];
                        items.push(i);
                    }

                    let task: Task = await invoke("get_task", {
                        taskId: objectiveFir.task,
                    })!;

                    i.levelRequired.push({
                        level: task.min_level,
                        count: objectiveFir.count,
                    });
                }
                let objectiveNotFir = objectives.find(
                    (objective: any) =>
                        objective.item == item.id && objective.found_in_raid
                );
                if (objectiveNotFir) {
                    let i = items.find(
                        (i) => i.id == item.id && !i.foundInRaid
                    );
                    if (!i) {
                        i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                        i.foundInRaid = false;
                        i.levelRequired = [];
                        items.push(i);
                    }

                    let task: Task = await invoke("get_task", {
                        taskId: objectiveNotFir.task,
                    })!;

                    i.levelRequired.push({
                        level: task.min_level,
                        count: objectiveNotFir.count,
                    });
                }
            });
            setItems(items);
        })();
    }, []);

    return (
        <>
            <ul className={styles.header}>
                <li>
                    <button
                        className={activePage == 0 ? styles.active : ""}
                        onClick={() => setActivePage(0)}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        className={activePage == 1 ? styles.active : ""}
                        onClick={() => setActivePage(1)}
                    >
                        Needs Collecting
                    </button>
                </li>
            </ul>
            <ul>
                {activePage == 0 ? (
                    <AllPage items={items} />
                ) : (
                    <NeedsCollectingPage items={items} />
                )}
            </ul>
        </>
    );
}

function AllPage({ items }: { items: Item[] }) {
    return (
        <>
            {items.map((item: Item) => {
                return <ItemLine item={item} />;
            })}
        </>
    );
}

function NeedsCollectingPage({ items }: { items: Item[] }) {
    return (
        <>
            {items.map((item: Item) => {
                return <ItemLine item={item} />;
            })}
        </>
    );
}

function ItemLine({ item }: { item: Item }) {
    return (
        <span className={styles.itemLine}>
            <img src={item.image} />
            <p>{item.name}</p>
        </span>
    );
}
