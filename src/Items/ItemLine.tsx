import { CollatedItem } from "../types";
import { invoke } from "@tauri-apps/api";
import styles from "./Items.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ItemLine({
    item,
    setItems,
    items,
}: {
    item: CollatedItem;
    setItems: (items: CollatedItem[]) => void;
    items: CollatedItem[];
}) {
    const formatK = (n: number) => {
        if (n < 1000) return n;
        if (n >= 1000 && n < 1000000) return +(n / 1000).toFixed(1) + "K";
        if (n >= 1000000 && n < 1000000000)
            return +(n / 1000000).toFixed(1) + "M";
        if (n >= 1000000000 && n < 1000000000000)
            return +(n / 1000000000).toFixed(1) + "B";
        if (n >= 1000000000000) return +(n / 1000000000000).toFixed(1) + "T";
    };

    function increment() {
        let newItems = items.map((i) => {
            if (i.id == item.id && i.foundInRaid == item.foundInRaid) {
                i.collected++;
            }
            return i;
        });
        setItems(newItems);
        invoke("collect_item", {
            id: item.id,
            fir: item.foundInRaid,
        });
    }

    function decrement() {
        let newItems = items.map((i) => {
            if (
                i.id == item.id &&
                i.foundInRaid == item.foundInRaid &&
                i.collected > 0
            ) {
                i.collected--;
            }
            return i;
        });
        setItems(newItems);
        invoke("remove_item", {
            id: item.id,
            fir: item.foundInRaid,
        });
    }

    return (
        <span className={styles.itemLine}>
            <div>
                <img
                    src={item.image}
                    loading="lazy"
                />
                {item.foundInRaid ? (
                    <FontAwesomeIcon icon="circle-check" />
                ) : (
                    ""
                )}
            </div>
            <p>{item.name}</p>
            <p>
                <button onClick={decrement}>
                    <FontAwesomeIcon icon="minus" />
                </button>
                {item.collected}
            </p>
            <p>/</p>
            <p>
                <span>{formatK(item.totalCount)}</span>
                <button onClick={increment}>
                    <FontAwesomeIcon icon="plus" />
                </button>
            </p>
        </span>
    );
}
