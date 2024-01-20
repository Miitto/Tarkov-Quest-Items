import { CollatedItem } from "../types";
import { invoke } from "@tauri-apps/api";
import styles from "./Items.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export function ItemLine({
    item,
    setItems,
    items,
    setItemDialog,
}: {
    item: CollatedItem;
    setItems: (items: CollatedItem[]) => void;
    items: CollatedItem[];
    setItemDialog: (dialog: JSX.Element) => void;
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

    function increment(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (!e.ctrlKey) {
            let newItems = items.map((i) => {
                if (
                    i.id == item.id &&
                    i.foundInRaid == item.foundInRaid &&
                    item.dogtag_level == i.dogtag_level &&
                    item.min_durability == i.min_durability &&
                    item.max_durability == i.max_durability
                ) {
                    i.collected++;
                }
                return i;
            });
            setItems(newItems);
            invoke("collect", {
                id: item.id,
                fir: item.foundInRaid,
                dogtag_level: item.dogtag_level,
                min_durability: item.min_durability,
                max_durability: item.max_durability,
            });
        } else {
            setItemDialog(<AddItemDialog />);
        }
    }

    function decrement(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (!e.ctrlKey) {
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
            invoke("uncollect", {
                id: item.id,
                fir: item.foundInRaid,
                dogtag_level: item.dogtag_level,
                min_durability: item.min_durability,
                max_durability: item.max_durability,
            });
        } else {
            setItemDialog(<RemoveItemDialog />);
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
            invoke<number>("collect", {
                id: item.id,
                fir: item.foundInRaid,
                quantity: itemCount,
                dogtag_level: item.dogtag_level,
                min_durability: item.min_durability,
                max_durability: item.max_durability,
            })
                .then((quant: number) => {
                    let newItems = items.map((i) => {
                        if (
                            i.id == item.id &&
                            i.foundInRaid == item.foundInRaid &&
                            i.dogtag_level == item.dogtag_level &&
                            i.min_durability == item.min_durability &&
                            i.max_durability == item.max_durability
                        ) {
                            i.collected = quant;
                        }
                        return i;
                    });
                    setItems(newItems);
                })
                .catch((e) => {
                    console.log(e);
                });
            addItemDialog.current?.close();
        }

        return (
            <dialog
                ref={addItemDialog}
                className={styles.itemDialog}
                onClick={(e) => {
                    if (e.target === addItemDialog.current) {
                        addItemDialog.current?.close();
                    }
                }}
            >
                <form onSubmit={addItem}>
                    <img src={item.image} />
                    <input
                        type="range"
                        min="1"
                        max={Math.min(item.totalCount)}
                        step="1"
                        value={itemCount}
                        onChange={(e) => setItemCount(+e.target.value)}
                    />
                    <input
                        type="number"
                        min="1"
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
            invoke<number>("uncollect", {
                id: item.id,
                fir: item.foundInRaid,
                dogtag_level: item.dogtag_level,
                min_durability: item.min_durability,
                max_durability: item.max_durability,
                quantity: itemCount,
            })
                .then((quant: number) => {
                    let newItems = items.map((i) => {
                        if (
                            i.id == item.id &&
                            i.foundInRaid == item.foundInRaid &&
                            i.dogtag_level == item.dogtag_level &&
                            i.min_durability == item.min_durability &&
                            i.max_durability == item.max_durability
                        ) {
                            i.collected = quant;
                        }
                        return i;
                    });
                    setItems(newItems);
                })
                .catch((e) => {
                    console.log(e);
                });
            removeItemDialog.current?.close();
        }

        return (
            <dialog
                ref={removeItemDialog}
                className={styles.itemDialog}
                onClick={(e) => {
                    if (e.target === removeItemDialog.current) {
                        removeItemDialog.current?.close();
                    }
                }}
            >
                <form onSubmit={removeItem}>
                    <img src={item.image} />
                    <input
                        type="range"
                        min="1"
                        max={item.collected}
                        step="1"
                        value={itemCount}
                        onChange={(e) => setItemCount(+e.target.value)}
                    />
                    <input
                        type="number"
                        min="1"
                        max={item.collected}
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
            <p>{item.dogtag_level > 0 ? `^${item.dogtag_level}` : ""}</p>
            <p>
                {item.min_durability > 0 || item.max_durability < 100
                    ? `${item.min_durability}%-${item.max_durability}%`
                    : ""}
            </p>
            <p>
                <button
                    onClick={decrement}
                    disabled={item.collected < 1}
                >
                    <FontAwesomeIcon icon="minus" />
                </button>
                <span>{item.collected}</span>
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
