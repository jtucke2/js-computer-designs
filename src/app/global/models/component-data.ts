import { ComputerComponent, ComponentManufacturer, ComponentCategory } from './component';

export const defaultComponentCategories: ComponentCategory[] = [
    {
        name: 'CPU',
        description: 'The central processing unit of the computer.',
        specificationFields: [
            'Speed',
            'Cache Size',
            'Core Count',
            'Motherboard Type'
        ]
    },
];

export const defaultComponentManufacturers: ComponentManufacturer[] = [
    {
        name: 'Intel',
        address: '123 Main st. Silicon Valley 90210',
        phoneNumber: '(555) 555-1234',
        email: 'support@intel.com'
    },
    {
        name: 'AMD',
        address: '456 Main st. Silicon Valley 90210',
        phoneNumber: '(555) 555-5678',
        email: 'support@amd.com'
    },
];

export const defaultComponentsData: ComputerComponent[] = [
    // ~~~ CPUs ~~~
    // Ninja series
    {
        manufacturer: 'Intel',
        model: 'Core i9-9900K',
        modelNumber: 'BX80684I99900K',
        purchasePrice: 330,
        salePrice: 600,
        inventoryLevel: 7,
        category: 'CPU',
        specificationFields: [
            {
                Speed: '5.0 Ghz',
                'Cache Size': '16 MB',
                'Core Count': '8 Cores / 16 Threads',
                'Motherboard Type': 'LGA1151'
            }
        ],
        requiredPower: 95
    },
    {
        manufacturer: 'Intel',
        model: 'Core i9-9700K',
        modelNumber: 'BX80684I79700K',
        purchasePrice: 270,
        salePrice: 550,
        inventoryLevel: 5,
        category: 'CPU',
        specificationFields: [
            {
                Speed: '4.9 Ghz',
                'Cache Size': '16 MB',
                'Core Count': '8 Cores / 16 Threads',
                'Motherboard Type': 'LGA1151'
            }
        ],
        requiredPower: 95
    },
    // Frag series
    {
        manufacturer: 'AMD',
        model: 'Ryzen 7 2700X',
        modelNumber: 'YD270XBGAFBOX',
        purchasePrice: 190,
        salePrice: 330,
        inventoryLevel: 6,
        category: 'CPU',
        specificationFields: [
            {
                Speed: '3.3 Ghz',
                'Cache Size': '20 MB',
                'Core Count': '8 Cores / 16 Threads',
                'Motherboard Type': 'AM4'
            }
        ],
        requiredPower: 105
    },
    {
        manufacturer: 'AMD',
        model: 'Ryzen 5 2600X',
        modelNumber: 'YD260XBCAFBOX',
        purchasePrice: 95,
        salePrice: 190,
        inventoryLevel: 21,
        category: 'CPU',
        specificationFields: [
            {
                Speed: '3.3 Ghz',
                'Cache Size': '19 MB',
                'Core Count': '6 Cores / 12 Threads',
                'Motherboard Type': 'AM4'
            }
        ],
        requiredPower: 95
    },
    // Pro series
    {
        manufacturer: 'AMD',
        model: 'Ryzen Threadripper 2990WX',
        modelNumber: 'YD299XAZAFWOF',
        purchasePrice: 1300,
        salePrice: 1750,
        inventoryLevel: 2,
        category: 'CPU',
        specificationFields: [
            {
                Speed: '4.2 Ghz',
                'Cache Size': '80 MB',
                'Core Count': '32 Cores / 64 Threads',
                'Motherboard Type': 'TR 4'
            }
        ],
        requiredPower: 250
    },
    {
        manufacturer: 'AMD',
        model: 'Ryzen Threadripper 2950X',
        modelNumber: 'YD295XA8AFWOF',
        purchasePrice: 450,
        salePrice: 770,
        inventoryLevel: 8,
        category: 'CPU',
        specificationFields: [
            {
                Speed: '4.4 Ghz',
                'Cache Size': '40 MB',
                'Core Count': '16 Cores / 32 Threads',
                'Motherboard Type': 'TR 4'
            }
        ],
        requiredPower: 180
    },
];
