import { BasePlatform } from './base-platform';
import { Category } from './categories.enum';

export const defaultPlatforms: BasePlatform[] = [
    {
        id: 'b80fa5ae-e3ec-4152-8b80-5c23fbf4cb91',
        name: 'Ninja Series',
        description: 'Max Power. No Limits.',
        baseSalePrice: 1000,
        purchasePrice: 500,
        image: './assets/images/1000D-Built-27.png',
        active: true,
        components: {
            [Category.CPU]: [
                'BX80684I99900K',
                'BX80684I79700K'
            ],
            GPU: [
                'nrtx2080ti',
                'nrtx2060'
            ],
            RAM: [
                'cv3200-16',
                'cv3200-32'
            ],
            'Hard Drive': [
                'evo970-1',
                'evo970-1-x2',
                'evo870-1',
                'barra4'
            ],
            'Power Supply': [
                'tx750',
                'tx1000'
            ]
        },
        defaultComponents: {
            [Category.CPU]: 'BX80684I99900K',
            GPU: 'nrtx2080ti',
            RAM: 'cv3200-32',
            'Hard Drive': 'evo970-1',
            'Power Supply': 'tx750'
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
            [Category.CPU]: [
                'YD270XBGAFBOX',
                'YD260XBCAFBOX'
            ],
            GPU: [
                'nrtx2060'
            ],
            RAM: [
                'cv3200-8',
                'cv3200-16'
            ],
            'Hard Drive': [
                'evo970-1',
                'evo970-1-x2',
                'evo870-1',
                'barra4'
            ],
            'Power Supply': [
                'tx750',
                'tx500'
            ]
        },
        defaultComponents: {
            [Category.CPU]: 'YD270XBGAFBOX',
            GPU: 'nrtx2060',
            RAM: 'cv3200-8',
            'Hard Drive': 'evo870-1',
            'Power Supply': 'tx500'
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
            [Category.CPU]: [
                'YD295XA8AFWOF',
                'YD299XAZAFWOF'
            ],
            GPU: [
                'amdvegapro'
            ],
            RAM: [
                'cv3200-64',
                'cv3200-32'
            ],
            'Hard Drive': [
                'evo970-1',
                'evo970-1-x2',
                'evo870-1',
                'barra4'
            ],
            'Power Supply': [
                'tx750',
                'tx1000'
            ]
        },
        defaultComponents: {
            [Category.CPU]: 'YD295XA8AFWOF',
            GPU: 'amdvegapro',
            RAM: 'cv3200-64',
            'Hard Drive': 'evo970-1',
            'Power Supply': 'tx750'
        }
    },
];
