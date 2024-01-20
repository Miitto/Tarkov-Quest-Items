import { useMemo, useState } from "react";
import { CollatedItem } from "../types";

import styles from "./Items.module.scss";
import { ItemLine } from "./ItemLine";
import { ItemTitleBar } from "./ItemTitleBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ItemsPanel({
    items,
    setItems,
}: {
    items: CollatedItem[];
    setItems: (items: CollatedItem[]) => void;
}) {
    const [activePage, setActivePage] = useState(0);

    const [filterName, setFilterName] = useState("");
    const [filterFir, setFilterFir] = useState(false);

    const [sort, setSort] = useState("name");

    const [ItemDialog, setItemDialog] = useState(<DefaultDialog />);

    const filteredItems = useMemo(() => {
        return items
            .filter((item) => {
                return (
                    (item.name
                        .toLowerCase()
                        .includes(filterName.toLowerCase()) ||
                        filterName == "") &&
                    (!filterFir || item.foundInRaid)
                );
            })
            .sort((a, b) => {
                if (sort.startsWith("name")) {
                    if (sort.endsWith("-")) {
                        return b.name.localeCompare(a.name);
                    }
                    return a.name.localeCompare(b.name);
                }
                if (sort.startsWith("collected")) {
                    if (sort.endsWith("-")) {
                        return a.collected - b.collected;
                    }
                    return b.collected - a.collected;
                }
                if (sort.startsWith("total")) {
                    if (sort.endsWith("-")) {
                        return a.totalCount - b.totalCount;
                    }
                    return b.totalCount - a.totalCount;
                }
                if (sort.startsWith("fir")) {
                    if (a.foundInRaid && b.foundInRaid) return 0;
                    if (sort.endsWith("-")) {
                        return a.foundInRaid ? 1 : -1;
                    }
                    return b.foundInRaid ? 1 : -1;
                }
                if (sort.startsWith("dtl")) {
                    if (a.dogtag_level != 0 && b.dogtag_level == 0) {
                        return -1;
                    }
                    if (a.dogtag_level == 0 && b.dogtag_level != 0) {
                        return 1;
                    }
                    if (sort.endsWith("-")) {
                        return a.dogtag_level - b.dogtag_level;
                    }
                    return b.dogtag_level - a.dogtag_level;
                }
                if (sort.startsWith("mindur")) {
                    if (
                        (a.max_durability != 100 || a.min_durability != 0) &&
                        b.max_durability == 100 &&
                        b.min_durability == 0
                    ) {
                        return -1;
                    }
                    if (
                        a.max_durability == 100 &&
                        a.min_durability == 0 &&
                        (b.max_durability != 100 || b.min_durability != 0)
                    ) {
                        return 1;
                    }
                    if (sort.endsWith("-")) {
                        return b.min_durability - a.min_durability;
                    }
                    return a.min_durability - b.min_durability;
                }
                if (sort.startsWith("maxdur")) {
                    if (
                        (a.max_durability != 100 || a.min_durability != 0) &&
                        b.max_durability == 100 &&
                        b.min_durability == 0
                    ) {
                        return -1;
                    }
                    if (
                        a.max_durability == 100 &&
                        a.min_durability == 0 &&
                        (b.max_durability != 100 || b.min_durability != 0)
                    ) {
                        return 1;
                    }
                    if (sort.endsWith("-")) {
                        return b.max_durability - a.max_durability;
                    }
                    return a.max_durability - b.max_durability;
                }
                return 0;
            });
    }, [items, filterName, sort, filterFir]);

    return (
        <>
            <ul className={styles.header}>
                <li>
                    <button
                        className={activePage == 0 ? styles.active : ""}
                        onClick={() => setActivePage(0)}
                    >
                        Needs Collecting
                    </button>
                </li>
                <li>
                    <button
                        className={activePage == 1 ? styles.active : ""}
                        onClick={() => setActivePage(1)}
                    >
                        All
                    </button>
                </li>
            </ul>
            <FilterBar
                filterName={filterName}
                setFilterName={setFilterName}
                filterFir={filterFir}
                setFilterFir={setFilterFir}
            />
            <ul className={styles.itemList}>
                <ItemTitleBar
                    sort={sort}
                    setSort={setSort}
                />
                {activePage == 0 ? (
                    <NeedsCollectingPage
                        items={filteredItems}
                        setItems={setItems}
                        setItemDialog={setItemDialog}
                    />
                ) : (
                    <AllPage
                        items={filteredItems}
                        setItems={setItems}
                        setItemDialog={setItemDialog}
                    />
                )}
            </ul>
            {ItemDialog}
        </>
    );
}

function FilterBar({
    filterName,
    setFilterName,
    filterFir,
    setFilterFir,
}: {
    filterName: string;
    setFilterName: (name: string) => void;
    filterFir: boolean;
    setFilterFir: (fir: boolean) => void;
}) {
    return (
        <div className={styles.filterBar}>
            <label>
                <input
                    type="checkbox"
                    checked={filterFir}
                    onChange={(e) => setFilterFir(e.target.checked)}
                />
                <span>
                    <FontAwesomeIcon icon="circle-check" />
                </span>
            </label>
            <input
                type="text"
                placeholder="Filter Name..."
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
            />
        </div>
    );
}

function AllPage({
    items,
    setItems,
    setItemDialog,
}: {
    items: CollatedItem[];
    setItems: (items: CollatedItem[]) => void;
    setItemDialog: (dialog: JSX.Element) => void;
}) {
    return (
        <>
            {items.map((item: CollatedItem) => {
                return (
                    <ItemLine
                        key={`${item.id}${item.foundInRaid}${item.totalCount}${item.collected}${item.dogtag_level}${item.min_durability}${item.max_durability}`}
                        item={item}
                        setItems={setItems}
                        items={items}
                        setItemDialog={setItemDialog}
                    />
                );
            })}
        </>
    );
}

function NeedsCollectingPage({
    items,
    setItems,
    setItemDialog,
}: {
    items: CollatedItem[];
    setItems: (items: CollatedItem[]) => void;
    setItemDialog: (dialog: JSX.Element) => void;
}) {
    const noneCollectedItems = useMemo(() => {
        return items.filter((item) => item.collected < item.totalCount);
    }, [items]);

    return (
        <>
            {noneCollectedItems.map((item: CollatedItem) => {
                return (
                    <ItemLine
                        key={`${item.id}${item.foundInRaid}${item.totalCount}${item.collected}${item.dogtag_level}${item.min_durability}${item.max_durability}`}
                        item={item}
                        setItems={setItems}
                        items={items}
                        setItemDialog={setItemDialog}
                    />
                );
            })}
        </>
    );
}

function DefaultDialog() {
    return <dialog></dialog>;
}
