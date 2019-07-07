export interface ComputerComponent<T = string, U = string> {
    manufacturer: T;
    model: string;
    modelNumber: string;
    purchasePrice: number;
    salePrice: number;
    inventoryLevel: number;
    category: U;
    specificationFields: [{ [s: string]: string }];
    requiredPower?: number;
}

export interface ComponentManufacturer {
    name: string;
    address: string;
    phoneNumbers: string[];
    emails: string[];
}

export interface ComponentCategory {
    name: string;
    description: string;
    specificationFields: string[];
}

export type ComponentD = ComputerComponent<ComponentManufacturer, ComponentCategory>;
