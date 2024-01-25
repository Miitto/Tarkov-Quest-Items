import { invoke } from "@tauri-apps/api";
import { readTextFile } from "@tauri-apps/api/fs";
import { watch } from "tauri-plugin-fs-watch-api";
import { TaskStatus } from "../../../types";

export class Watcher {
    path: string;
    stopWatching: (() => void) | null = null;
    logs: Log[] = [];
    constructor(path: string) {
        this.path = path;
    }
    async watch(should_watch: boolean = true) {
        if (this.stopWatching) this.stopWatching();
        if (!should_watch) return;
        await invoke("expand_scope", { folderPath: this.path });
        this.stopWatching = await watch(
            this.path,
            (event) => {
                for (let evt of event) {
                    if (evt.kind === "Any") {
                        invoke("expand_scope", { folderPath: this.path });
                        this.onLogChange(evt.path);
                    }
                }
            },
            { recursive: true }
        );
    }

    async onLogChange(path: string) {
        if (!path.endsWith("notifications.log")) {
            return;
        }
        let log = this.logs.find((log) => log.path === path);
        if (!log) return this.logs.push(new Log(path));

        log.parseLog();
    }

    unwatch() {
        if (this.stopWatching) this.stopWatching();
    }
}

export class Log {
    path: string;
    lastLine: number = 0;

    constructor(path: string) {
        this.path = path;

        this.parseLog();
    }

    async parseLog() {
        console.log(`Parsing log: ${this.path}`);
        let content = await readTextFile(this.path);

        let lines = content.split("\n");
        let newLines = lines.slice(this.lastLine);
        console.log(newLines.length);
        // this.lastLine = lines.length; // TODO remove for release

        for (let i = 0; i < newLines.length; i++) {
            let line = newLines[i];
            if (line.startsWith("{")) {
                let raw = "";
                while (!line.startsWith("}")) {
                    raw += line;
                    line = newLines[++i];
                }
                raw += line;
                let json = JSON.parse(raw);
                if (
                    json.type != "new_message" ||
                    !(json.message.type in TaskStatus)
                ) {
                    continue;
                }
                console.log(json);
                let taskId = json.message.templateId.split(" ")[0];
                let task;
                try {
                    task = await invoke("get_task", { taskId });
                } catch (e) {
                    console.error(e); // Task not found
                    return;
                }

                console.log(task);

                if (json.message.type === 12) {
                    await invoke("complete_task", { id: taskId });
                }
            }
        }
    }
}
