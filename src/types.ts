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
    description: string;
    item: string;
    task: string;
    wipe: number;
    completed: boolean;
    optional: boolean;
    count: number;
    collected: number;
    found_in_raid: boolean;
    min_durability: number;
    max_durability: number;
    dogtag_level: number;
}

export interface CollatedObjective {
    id: string;
    description: string;
    item: string;
    itemImage: string;
    task: string;
    wipe: number;
    completed: boolean;
    optional: boolean;
    count: number;
    collected: number;
    found_in_raid: boolean;
    in_stash: number;
    min_durability: number;
    max_durability: number;
    dogtag_level: number;
}

export interface CollatedItem {
    id: number;
    name: string;
    image: string;
    collected: number;
    foundInRaid: boolean;
    min_durability: number;
    max_durability: number;
    dogtag_level: number;
    totalCount: number;
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

export interface Settings {
    install_location: string;
    watch_logs: boolean;
}
