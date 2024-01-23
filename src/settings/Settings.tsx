import { open } from "@tauri-apps/api/dialog";
import { useEffect, useState } from "react";
import { Settings } from "../types";
import { invoke } from "@tauri-apps/api";

import styles from "./Settings.module.scss";

export function SettingsPage() {
    const [installLocation, setInstallLocation] = useState<string>("");
    const [watchLogs, setWatchLogs] = useState(false);
    const [closeToTray, setCloseToTray] = useState(false);
    const [installLocationValid, setInstallLocationValid] = useState(false);

    useEffect(() => {
        (async () => {
            let settings = await invoke<Settings>("get_settings");
            setInstallLocation(settings.install_location);
            setWatchLogs(settings.watch_logs);
            setCloseToTray(settings.close_to_tray);
            setInstallLocationValid(settings.install_location_valid);
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
            closeToTray: closeToTray,
        });
        await invoke("save_settings");
    }

    async function verifyPath(path: string | null = null) {
        if (path == null) path = installLocation;
        let valid = await invoke<boolean>("validate_location", {
            location: path,
        });
        setInstallLocationValid(valid);
    }

    async function autoDetectPath(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        let path = await invoke<string>("find_tarkov");
        console.log("Path: " + path);
        setInstallLocation(path);
        setInstallLocationValid(true);
    }

    return (
        <main className={styles.main}>
            <div>
                <label htmlFor="installLocation">Tarkov Directory</label>
                <input
                    className={installLocationValid ? "" : styles.invalid}
                    name="installLocation"
                    type="text"
                    value={installLocation}
                    autoComplete="off"
                    onChange={(e) => {
                        setInstallLocation(e.target.value);
                        verifyPath(e.target.value);
                    }}
                />
                <button onClick={pickPath}>Pick Path</button>
                <button onClick={autoDetectPath}>Auto Detect</button>
            </div>
            <div>
                <label htmlFor="watchLogs">Watch Logs</label>
                <input
                    type="checkbox"
                    checked={watchLogs}
                    name="watchLogs"
                    onChange={(e) => setWatchLogs(e.target.checked)}
                />
            </div>
            <div>
                <label htmlFor="closeToTray">Close To Tray</label>
                <input
                    type="checkbox"
                    checked={closeToTray}
                    name="closeToTray"
                    onChange={(e) => setCloseToTray(e.target.checked)}
                />
            </div>
            <div>
                <button onClick={saveSettings}>Save</button>
            </div>
        </main>
    );
}
