export interface Wipe {
    id: number;
    name: string;
}

export interface Item {
    id: number;
    name: string;
    image: string;
}

export interface Objective {
    id: string;
    name: string;
    description: string;
    item: Item;
    task: string;
    completed: boolean;
    optional: boolean;
    count: number;
    found_in_raid: boolean;
}

export interface CollatedItem {
    id: number;
    name: string;
    image: string;
    collected: number;
    foundInRaid: boolean;
    levelRequired: [
        {
            level: number;
            count: number;
        }?
    ];
}

export interface Task {
    id: string;
    name: string;
    vendor: string;
    min_level: number;
    wipe: number;
}
