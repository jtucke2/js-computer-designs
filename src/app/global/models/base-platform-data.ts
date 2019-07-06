import { BasePlatform } from './base-platform';

export const defaultPlatforms: BasePlatform[] = [
    {
        id: 1,
        name: 'Ninja Series',
        description: 'Max Power. No Limits.',
        baseSalePrice: 1000,
        purchasePrice: 500,
        // TODO pc components
        image: './assets/images/1000D-Built-27.png',
        active: true
    },
    {
        id: 2,
        name: 'Frag Series',
        description: 'eSports Ready. Excellent Value.',
        baseSalePrice: 600,
        purchasePrice: 300,
        // TODO pc components
        image: './assets/images/570X-RGB-MB-01-RED.png',
        active: true
    },
    {
        id: 3,
        name: 'Pro Series',
        description: 'Productive. Enterprise Ready.',
        baseSalePrice: 1200,
        purchasePrice: 600,
        // TODO pc components
        image: './assets/images/Carbide-600Q-01.png',
        active: true
    }
];
