import { useMemo, useState } from "react";
import { CollatedItem } from "../types";

import styles from "./Items.module.scss";
import { ItemLine } from "./ItemLine";
import { ItemTitleBar } from "./ItemTitleBar";

export function ItemsPanel({
    items,
    setItems,
}: {
    items: CollatedItem[];
    setItems: (items: CollatedItem[]) => void;
}) {
    const [activePage, setActivePage] = useState(0);

    const [filterName, setFilterName] = useState("");

    const [sort, setSort] = useState("name");

    const filteredItems = useMemo(() => {
        return items
            .filter((item) => {
                return (
                    item.name
                        .toLowerCase()
                        .includes(filterName.toLowerCase()) || filterName == ""
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
                return 0;
            });
    }, [items, filterName, sort]);

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
                    />
                ) : (
                    <AllPage
                        items={filteredItems}
                        setItems={setItems}
                    />
                )}
            </ul>
        </>
    );
}

function FilterBar({
    filterName,
    setFilterName,
}: {
    filterName: string;
    setFilterName: (name: string) => void;
}) {
    return (
        <div className={styles.filterBar}>
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
}: {
    items: CollatedItem[];
    setItems: (items: CollatedItem[]) => void;
}) {
    return (
        <>
            {items.map((item: CollatedItem) => {
                return (
                    <ItemLine
                        key={`${item.id}${item.foundInRaid}${item.totalCount}${item.collected}`}
                        item={item}
                        setItems={setItems}
                        items={items}
                    />
                );
            })}
        </>
    );
}

function NeedsCollectingPage({
    items,
    setItems,
}: {
    items: CollatedItem[];
    setItems: (items: CollatedItem[]) => void;
}) {
    const noneCollectedItems = useMemo(() => {
        return items.filter((item) => item.collected < item.totalCount);
    }, [items]);

    return (
        <>
            {noneCollectedItems.map((item: CollatedItem) => {
                return (
                    <ItemLine
                        key={`${item.id}${item.foundInRaid}${item.totalCount}${item.collected}`}
                        item={item}
                        setItems={setItems}
                        items={items}
                    />
                );
            })}
        </>
    );
}
