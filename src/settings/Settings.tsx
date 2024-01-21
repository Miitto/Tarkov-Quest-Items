import { open } from "@tauri-apps/api/dialog";
import { useEffect, useState } from "react";
import { Settings } from "../types";
import { invoke } from "@tauri-apps/api";

export function SettingsPage() {
    const [installLocation, setInstallLocation] = useState<string>("");

    useEffect(() => {
        (async () => {
            let settings = await invoke<Settings>("get_settings");
            setInstallLocation(settings.install_location);
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

    return (
        <main>
            <form>
                <input
                    type="text"
                    value={installLocation}
                    onChange={(e) => setInstallLocation(e.target.value)}
                />
                <button onClick={pickPath}>Pick Path</button>
                <input type="submit" />
            </form>
        </main>
    );
}
