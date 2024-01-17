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
    id: number;
    api_id: string;
    name: string;
    description: string;
    item: Item;
    wipe: Wipe;
    completed: boolean;
    optional: boolean;
    count: number;
    foundInRaid: boolean;
}
