import { useState } from "react";
import styles from "./MenuBar.module.scss";
import { WebviewWindow } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api";

export function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    async function openSettings() {
        console.log("Opening Settings");
        await invoke("open_settings");
    }

    return (
        <div
            className={`${styles.menuBar} ${menuOpen ? styles.show : ""}`}
            onMouseLeave={() => setMenuOpen(false)}
        >
            <div>
                <button onClick={() => setMenuOpen(menuOpen ? false : true)}>
                    File
                </button>
                <ul>
                    <button>Import Data</button>
                    <button>Export Data</button>
                    <hr />
                    <button
                        onClick={() => {
                            openSettings();
                        }}
                    >
                        Settings
                    </button>
                </ul>
            </div>
            <div>
                <button onClick={() => setMenuOpen(menuOpen ? false : true)}>
                    Tasks
                </button>
                <ul>
                    <button>Set Custom Task Filter</button>
                </ul>
            </div>
        </div>
    );
}
