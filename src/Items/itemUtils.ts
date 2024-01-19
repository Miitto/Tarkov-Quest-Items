import { invoke } from "@tauri-apps/api";
import { CollatedItem, Item, Objective } from "../types";

export async function getItems() {
    let onlyItems: Item[] = await invoke("get_all_items");

    let objectives: Objective[] = await invoke("get_all_objectives");

    let items: CollatedItem[] = [];
    await Promise.all(
        onlyItems.map(async (item: Item) => {
            let objectiveFirs = objectives.filter(
                (objective: any) =>
                    objective.item == item.id && objective.found_in_raid
            );
            await Promise.all(
                objectiveFirs.map(async (objective) => {
                    let i = items.find((i) => i.id == item.id && i.foundInRaid);
                    if (!i) {
                        i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                        i.foundInRaid = true;
                        i.levelRequired = [];
                        i.collected = 0;
                        i.totalCount = 0;
                        items.push(i);
                    }

                    let quantity = await invoke<number>(
                        "get_collected_quantity",
                        {
                            id: item.id,
                            fir: true,
                        }
                    );

                    i.collected += quantity;

                    if (!objective.completed) {
                        i.totalCount += objective.count - objective.collected;
                    }

                    return i;
                })
            );
            let objectiveNotFirs = objectives.filter(
                (objective: any) =>
                    objective.item == item.id && !objective.found_in_raid
            );
            await Promise.all(
                objectiveNotFirs.map(async (objective) => {
                    if (
                        objective.description
                            .toLowerCase()
                            .startsWith("hand over")
                    ) {
                        return;
                    }
                    let i = items.find(
                        (i) => i.id == item.id && !i.foundInRaid
                    );
                    if (!i) {
                        i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                        i.foundInRaid = false;
                        i.levelRequired = [];
                        i.collected = 0;
                        i.totalCount = 0;
                        items.push(i);
                    }

                    let quantity = await invoke<number>(
                        "get_collected_quantity",
                        {
                            id: item.id,
                            fir: false,
                        }
                    );

                    i.collected += quantity;

                    if (!objective.completed) {
                        i.totalCount += objective.count - objective.collected;
                    }
                    return i;
                })
            );
            return item;
        })
    );
    items.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    console.log(items);
    return items;
}
