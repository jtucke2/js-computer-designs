export interface BasePlatform {
    id?: number;
    name: string;
    description: string;
    baseSalePrice: number;
    purchasePrice: number;
    // TODO pc components
    image: string;
    active: boolean;
}
