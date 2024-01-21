import { open } from "@tauri-apps/api/dialog";
import { useState } from "react";

export function Settings() {
    const [path, setPath] = useState("");

    async function pickPath() {
        const dir = (await open({
            directory: true,
        })) as unknown as string | null; // Since it will not be an array, as multiple is not set

        if (dir) {
            setPath(dir);
        }
    }

    return (
        <main>
            <form>
                <input
                    type="text"
                    value={path}
                    onChange={(e) => setPath(e.target.value)}
                />
                <button onClick={pickPath}>Pick Path</button>
                <input type="submit" />
            </form>
        </main>
    );
}
