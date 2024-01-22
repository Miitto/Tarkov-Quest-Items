import { open } from "@tauri-apps/api/dialog";
import { useCallback, useEffect, useState } from "react";
import { Settings } from "../types";
import { invoke } from "@tauri-apps/api";

import styles from "./Settings.module.scss";
import { UnlistenFn, listen } from "@tauri-apps/api/event";
import { WebviewWindow } from "@tauri-apps/api/window";

export function SettingsPage() {
    const [installLocation, setInstallLocation] = useState<string>("");
    const [watchLogs, setWatchLogs] = useState(false);
    const [unlisten, setUnlisten] = useState<UnlistenFn | null>(null);

    useEffect(() => {
        (async () => {
            let settings = await invoke<Settings>("get_settings");
            setInstallLocation(settings.install_location);
            setWatchLogs(settings.watch_logs);
        })();
    }, []);

    async function pickPath() {
        const dir = (await open({
            directory: true,
        })) as unknown as string | null; // Since it will not be an array, as multiple is not set

        if (dir) {
            setInstallLocation(dir);
        }
    }

    async function saveSettings() {
        await invoke("set_settings", {
            installLocation: installLocation,
            watchLogs: watchLogs,
        });
        await invoke("save_settings");
    }

    async function verifyPath(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <main className={styles.main}>
            <form onSubmit={verifyPath}>
                <label htmlFor="installLocation">Tarkov Directory</label>
                <input
                    name="installLocation"
                    type="text"
                    value={installLocation}
                    onChange={(e) => setInstallLocation(e.target.value)}
                />
                <button onClick={pickPath}>Pick Path</button>
                <input type="submit" />
            </form>
            <form>
                <label htmlFor="watchLogs">Watch Logs</label>
                <input
                    type="checkbox"
                    checked={watchLogs}
                    name="watchLogs"
                    onChange={(e) => setWatchLogs(e.target.checked)}
                />
            </form>
            <div>
                <button onClick={saveSettings}>Save</button>
            </div>
        </main>
    );
}
