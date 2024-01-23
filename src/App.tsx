import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { ItemsPanel } from "./Items/Items";
import { TasksPanel } from "./Tasks/Tasks";
import { WipePanel } from "./nav/WipePanel";
import { CollatedItem } from "./types";
import { getItems } from "./Items/itemUtils";

import { MenuBar } from "./nav/MenuBar";
import { listen } from "@tauri-apps/api/event";
import { message } from "@tauri-apps/api/dialog";

function App() {
    const [activePanel, setActivePanel] = useState(0);
    const [activeWipe, setActiveWipe] = useState(-1);
    const [items, setItems] = useState<CollatedItem[]>([]);

    function setActiveWipePersist(idx: number) {
        setActiveWipe(idx);
        localStorage.setItem("activeWipe", idx.toString());
    }

    useEffect(() => {
        if (activeWipe != -1) {
            (async () => {
                setItems([]); // Clear Items while loading
                let items = await getItems();
                setItems(items);
            })();
        }
    }, [activeWipe]);

    useEffect(() => {
        const unlisten = listen(
            "bad-install-location",
            async (e: { payload: { message: string; path: string } }) => {
                await message(`${e.payload.message} at ${e.payload.path}`, {
                    title: "Bad Install Location",
                    type: "error",
                });
            }
        );

        return () => {
            unlisten.then((f) => f());
        };
    });

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
