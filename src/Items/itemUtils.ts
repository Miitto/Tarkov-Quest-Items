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
            for (let objective of objectiveFirs) {
                let i = items.find(
                    (i) =>
                        i.id == item.id &&
                        i.foundInRaid &&
                        i.dogtag_level == objective.dogtag_level &&
                        i.min_durability == objective.min_durability &&
                        i.max_durability == objective.max_durability
                );
                if (!i) {
                    i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                    i.foundInRaid = true;
                    i.collected = 0;
                    i.totalCount = 0;
                    i.dogtag_level = objective.dogtag_level;
                    i.min_durability = objective.min_durability;
                    i.max_durability = objective.max_durability;
                    let quantity = await invoke<number>(
                        "get_collected_quantity",
                        {
                            id: item.id,
                            fir: true,
                        }
                    );

                    i.collected += quantity;
                    items.push(i);
                }

                if (!objective.completed) {
                    i.totalCount += objective.count - objective.collected;
                }
            }
            let objectiveNotFirs = objectives.filter(
                (objective: any) =>
                    objective.item == item.id && !objective.found_in_raid
            );
            for (let objective of objectiveNotFirs) {
                if (
                    objective.description.toLowerCase().startsWith("hand over")
                ) {
                    return;
                }
                let i = items.find(
                    (i) =>
                        i.id == item.id &&
                        !i.foundInRaid &&
                        i.dogtag_level == objective.dogtag_level &&
                        i.min_durability == objective.min_durability &&
                        i.max_durability == objective.max_durability
                );
                if (!i) {
                    i = JSON.parse(JSON.stringify(item)) as CollatedItem;

                    i.foundInRaid = false;
                    i.collected = 0;
                    i.totalCount = 0;
                    i.dogtag_level = objective.dogtag_level;
                    i.min_durability = objective.min_durability;
                    i.max_durability = objective.max_durability;

                    let quantity = await invoke<number>(
                        "get_collected_quantity",
                        {
                            id: item.id,
                            fir: false,
                        }
                    );

                    i.collected += quantity;
                    items.push(i);
                }

                if (!objective.completed) {
                    i.totalCount += objective.count - objective.collected;
                }
                return i;
            }
            return item;
        })
    );
    items.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    return items;
}
