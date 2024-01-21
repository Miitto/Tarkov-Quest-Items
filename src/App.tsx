import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { ItemsPanel } from "./Items/Items";
import { TasksPanel } from "./Tasks/Tasks";
import { WipePanel } from "./nav/WipePanel";
import { CollatedItem } from "./types";
import { getItems } from "./Items/itemUtils";

import { MenuBar } from "./nav/MenuBar";

function App() {
    const [activePanel, setActivePanel] = useState(0);
    const [activeWipe, setActiveWipe] = useState(-1);
    const [items, setItems] = useState<CollatedItem[]>([]);

    function setActiveWipePersist(idx: number) {
        setActiveWipe(idx);
        localStorage.setItem("activeWipe", idx.toString());
    }

    useEffect(() => {
        (async () => {
            setItems([]); // Clear Items while loading
            let items = await getItems();
            setItems(items);
        })();
    }, [activeWipe]);

    return (
        <>
            <MenuBar />
            <div>
                <WipePanel
                    activeWipe={activeWipe}
                    setActiveWipe={setActiveWipePersist}
                />
                <main className={styles.main}>
                    <ul>
                        <li>
                            <button
                                className={
                                    activePanel == 0 ? styles.active : ""
                                }
                                onClick={() => setActivePanel(0)}
                            >
                                Items
                            </button>
                        </li>
                        <li>
                            <button
                                className={
                                    activePanel == 1 ? styles.active : ""
                                }
                                onClick={() => setActivePanel(1)}
                            >
                                Tasks
                            </button>
                        </li>
                    </ul>

                    <section>
                        {activePanel == 0 ? (
                            <ItemsPanel
                                items={items}
                                setItems={setItems}
                            />
                        ) : (
                            <TasksPanel activeWipe={activeWipe} />
                        )}
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
