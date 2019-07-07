import { BasePlatform } from './base-platform';

export const defaultPlatforms: BasePlatform[] = [
    {
        id: 'b80fa5ae-e3ec-4152-8b80-5c23fbf4cb91',
        name: 'Ninja Series',
        description: 'Max Power. No Limits.',
        baseSalePrice: 1000,
        purchasePrice: 500,
        // TODO pc components
        image: './assets/images/1000D-Built-27.png',
        active: true,
        components: {
            CPU: [
                'BX80684I99900K'
            ]
        },
        defaultComponents: {
            CPU: 'BX80684I99900K'
        }
    },
    {
        id: 'b85f7649-858f-42cc-9b77-bf14f2189d49',
        name: 'Frag Series',
        description: 'eSports Ready. Excellent Value.',
        baseSalePrice: 600,
        purchasePrice: 300,
        // TODO pc components
        image: './assets/images/570X-RGB-MB-01-RED.png',
        active: true,
        components: {
            CPU: [
                'YD270XBGAFBOX',
                'YD260XBCAFBOX'
            ]
        },
        defaultComponents: {
            CPU: 'YD270XBGAFBOX'
        }
    },
    {
        id: '3e6a7230-03c9-42b5-ad7e-43bc878c573a',
        name: 'Pro Series',
        description: 'Productive. Enterprise Ready.',
        baseSalePrice: 1200,
        purchasePrice: 600,
        // TODO pc components
        image: './assets/images/Carbide-600Q-01.png',
        active: true,
        components: {
            CPU: [
                'YD295XA8AFWOF',
                'YD299XAZAFWOF'
            ]
        },
        defaultComponents: {
            CPU: 'YD295XA8AFWOF'
        }
    },
];
