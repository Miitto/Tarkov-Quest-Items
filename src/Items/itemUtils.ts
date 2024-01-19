import { invoke } from "@tauri-apps/api";
import { CollatedItem, Item, Objective, Task } from "../types";

export async function getItems() {
    let onlyItems: Item[] = await invoke("get_all_items");

    let objectives: Objective[] = await invoke("get_all_objectives");

    let items: CollatedItem[] = [];
    await Promise.all(
        onlyItems.map(async (item: Item) => {
            let objectiveFir = objectives.find(
                (objective: any) =>
                    objective.item == item.id && objective.found_in_raid
            );
            if (objectiveFir) {
                let i = items.find((i) => i.id == item.id && i.foundInRaid);
                if (!i) {
                    i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                    i.foundInRaid = true;
                    i.levelRequired = [];
                    i.collected = 0;
                    i.totalCount = 0;
                    items.push(i);
                }

                let quantity = await invoke<number>("get_item_quantity", {
                    id: item.id,
                    fir: true,
                });

                i.collected += quantity;

                if (!objectiveFir.completed) {
                    i.totalCount += objectiveFir.count;

                    let task: Task = await invoke("get_task", {
                        taskId: objectiveFir.task,
                    })!;

                    i.levelRequired.push({
                        level: task.min_level,
                        count: objectiveFir.count,
                    });
                }
            }
            let objectiveNotFir = objectives.find(
                (objective: any) =>
                    objective.item == item.id && !objective.found_in_raid
            );
            if (objectiveNotFir) {
                let i = items.find((i) => i.id == item.id && !i.foundInRaid);
                if (!i) {
                    i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                    i.foundInRaid = false;
                    i.levelRequired = [];
                    i.collected = 0;
                    i.totalCount = 0;
                    items.push(i);
                }

                let quantity = await invoke<number>("get_item_quantity", {
                    id: item.id,
                    fir: false,
                });

                i.collected += quantity;

                if (!objectiveNotFir.completed) {
                    i.totalCount += objectiveNotFir.count;

                    let task: Task = await invoke("get_task", {
                        taskId: objectiveNotFir.task,
                    })!;

                    i.levelRequired.push({
                        level: task.min_level,
                        count: objectiveNotFir.count,
                    });
                }
            }
            return item;
        })
    );
    items.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    console.log(items);
    return items;
}
