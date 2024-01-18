import { useEffect, useState } from "react";
import { Item } from "../types";
import { invoke } from "@tauri-apps/api";

import styles from "./Items.module.scss";

export function ItemsPanel() {
    const [items, setItems] = useState<Item[]>([]);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        invoke("get_all_items").then((items) => {
            setItems(items as Item[]);
        });
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
                {items.map((item: Item) => {
                    return <ItemLine item={item} />;
                })}
            </ul>
        </>
    );
}

function allPage({ items }: { items: Item[] }) {
    return (
        <>
            {items.map((item: Item) => {
                return <ItemLine item={item} />;
            })}
        </>
    );
}

function ItemLine({ item }: { item: Item }) {
    return <p>{item.name}</p>;
}
