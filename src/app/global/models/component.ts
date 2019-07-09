import { Category } from './categories.enum';

export interface ComputerComponent<T = string> {
    manufacturer: T;
    model: string;
    modelNumber: string;
    purchasePrice: number;
    salePrice: number;
    inventoryLevel: number;
    category: Category | string;
    specificationFields: { name: string, value: string }[];
    requiredPower?: number;
}

export interface ComponentManufacturer {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
}

export interface ComponentCategory {
    name: string;
    description: string;
    specificationFields: string[];
}

export interface ComponentD extends ComputerComponent<ComponentManufacturer> {
    isDefault?: boolean;
}
