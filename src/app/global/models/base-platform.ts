import { ComponentD } from './component';

export interface BasePlatform<T = string[]> {
    id?: string;
    name: string;
    description: string;
    baseSalePrice: number;
    purchasePrice: number;
    image: string;
    active: boolean;
    components: { [s: string]: T };
    defaultComponents: { [s: string]: string };
}

export interface BasePlatformD extends BasePlatform<ComponentD[]> {
    startingPrice: number;
}

export interface CartPlatform extends BasePlatform<ComponentD> {
    purchasePrice: number;
}
