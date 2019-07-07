import { ComponentD } from './component';

export interface BasePlatform<T = string> {
    id?: string;
    name: string;
    description: string;
    baseSalePrice: number;
    purchasePrice: number;
    // TODO pc components
    image: string;
    active: boolean;
    components: { [s: string]: T[] };
    defaultComponents: { [s: string]: string };
}

export interface BasePlatformD extends BasePlatform<ComponentD> {
    startingPrice: number;
}
