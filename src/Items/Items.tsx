import { useEffect, useState } from "react";
import { Item } from "../types";
import { invoke } from "@tauri-apps/api";

export function ItemsPanel() {
    const [items, setItems] = useState<Item[]>([]);

    // useEffect(() => {
    //     invoke("get_all_items").then((items) => {
    //         setItems(items as Item[]);
    //     });
    // }, []);

    return (
        <ul>
            {items.map((item: Item) => {
                return <ItemLine item={item} />;
            })}
        </ul>
    );
}

function ItemLine({ item }: { item: Item }) {
    return <p>{item.name}</p>;
}
