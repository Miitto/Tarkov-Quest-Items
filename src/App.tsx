import { useState } from "react";
import styles from "./App.module.scss";
import { ItemsPanel } from "./Items/Items";
import { TasksPanel } from "./Tasks/Tasks";

function App() {
    const [activePanel, setActivePanel] = useState(0);
    return (
        <main className={styles.main}>
            <ul>
                <li>
                    <button
                        className={activePanel == 0 ? styles.active : ""}
                        onClick={() => setActivePanel(0)}
                    >
                        Items
                    </button>
                </li>
                <li>
                    <button
                        className={activePanel == 1 ? styles.active : ""}
                        onClick={() => setActivePanel(1)}
                    >
                        Tasks
                    </button>
                </li>
            </ul>

            <section>
                {activePanel == 0 ? <ItemsPanel /> : <TasksPanel />}
            </section>
        </main>
    );
}

export default App;
