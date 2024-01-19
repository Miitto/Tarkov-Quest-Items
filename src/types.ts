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
    totalCount: number;
    levelRequired: [
        {
            level: number;
            count: number;
        }?
    ];
}

export interface Task {
    fir: any;
    id: string;
    name: string;
    vendor: string;
    min_level: number;
    wipe: number;
    image: string;
}

export interface CollatedTask {
    id: string;
    name: string;
    image: string;
    vendor: string;
    min_level: number;
    wipe: number;
    completed: number;
    objectives: Objective[];
}
