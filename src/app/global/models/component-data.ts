import { ComputerComponent, ComponentManufacturer, ComponentCategory } from './component';
import { Category } from './categories.enum';

export const defaultComponentCategories: ComponentCategory[] = [
    {
        name: Category.CPU,
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
    {
        name: 'Nvidia',
        address: '789 Main st. Silicon Valley 90210',
        phoneNumber: '(555) 555-9034',
        email: 'support@nvidia.com'
    },
    {
        name: 'Corsair',
        address: '102 Main st. Silicon Valley 90210',
        phoneNumber: '(555) 555-2343',
        email: 'support@corsair.com'
    },
    {
        name: 'Samsung',
        address: '102 Main st. Seoul, Korea 90210',
        phoneNumber: '(555) 555-9584',
        email: 'support@samsung.com'
    },
    {
        name: 'Seagate',
        address: '102 Main st. Tax Haven, Bermuda 90210',
        phoneNumber: '(555) 555-9384',
        email: 'support@seagate.com'
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
        category: Category.CPU,
        specificationFields: [
            {
                name: 'Speed', value: '5.0 Ghz',
            },
            {
                name: 'Cache Size', value: '16 MB',
            },
            {
                name: 'Core Count', value: '8 Cores / 16 Threads',
            },
            {
                name: 'Motherboard Type', value: 'LGA1151'
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
        category: Category.CPU,
        specificationFields: [
            {
                name: 'Speed', value: '4.9 Ghz',
            },
            {
                name: 'Cache Size', value: '16 MB',
            },
            {
                name: 'Core Count', value: '8 Cores / 16 Threads',
            },
            {
                name: 'Motherboard Type', value: 'LGA1151'
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
        category: Category.CPU,
        specificationFields: [
            {
                name: 'Speed', value: '3.3 Ghz',
            },
            {
                name: 'Cache Size', value: '20 MB',
            },
            {
                name: 'Core Count', value: '8 Cores / 16 Threads',
            },
            {
                name: 'Motherboard Type', value: 'AM4'
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
        category: Category.CPU,
        specificationFields: [
            {
                name: 'Speed', value: '3.3 Ghz',
            },
            {
                name: 'Cache Size', value: '19 MB',
            },
            {
                name: 'Core Count', value: '6 Cores / 12 Threads',
            },
            {
                name: 'Motherboard Type', value: 'AM4'
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
        category: Category.CPU,
        specificationFields: [
            {
                name: 'Speed', value: '4.2 Ghz',
            },
            {
                name: 'Cache Size', value: '80 MB',
            },
            {
                name: 'Core Count', value: '32 Cores / 64 Threads',
            },
            {
                name: 'Motherboard Type', value: 'TR 4'
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
        category: Category.CPU,
        specificationFields: [
            {
                name: 'Speed', value: '4.4 Ghz',
            },
            {
                name: 'Cache Size', value: '40 MB',
            },
            {
                name: 'Core Count', value: '16 Cores / 32 Threads',
            },
            {
                name: 'Motherboard Type', value: 'TR 4'
            }
        ],
        requiredPower: 180
    },
    /**
     * ~~~ GPU ~~~
     * Speed, Memory
     */
    {
        manufacturer: 'Nvidia',
        model: 'RTX 2080 Ti',
        modelNumber: 'nrtx2080ti',
        purchasePrice: 860,
        salePrice: 1350,
        inventoryLevel: 8,
        category: Category.GPU,
        specificationFields: [
            {
                name: 'Speed',
                value: '8429 gHz'
            },
            {
                name: 'Memory',
                value: '11 GB'
            }
        ],
        requiredPower: 250
    },
    {
        manufacturer: 'AMD',
        model: 'Vega PRO',
        modelNumber: 'amdvegapro',
        purchasePrice: 960,
        salePrice: 1250,
        inventoryLevel: 2,
        category: Category.GPU,
        specificationFields: [
            {
                name: 'Speed',
                value: '7050 gHz'
            },
            {
                name: 'Memory',
                value: '15 GB'
            }
        ],
        requiredPower: 300
    },
    {
        manufacturer: 'Nvidia',
        model: 'RTX 2060',
        modelNumber: 'nrtx2060',
        purchasePrice: 200,
        salePrice: 400,
        inventoryLevel: 18,
        category: Category.GPU,
        specificationFields: [
            {
                name: 'Speed',
                value: '6429 gHz'
            },
            {
                name: 'Memory',
                value: '8 GB'
            }
        ],
        requiredPower: 170
    },
    /**
     * ~ RAM ~
     * Size, Speed
     */
    {
        manufacturer: 'Corsair',
        model: 'Vengeance 3200 8GB',
        modelNumber: 'cv3200-8',
        purchasePrice: 75,
        salePrice: 115,
        inventoryLevel: 18,
        category: Category.RAM,
        specificationFields: [
            {
                name: 'Speed',
                value: '3200 gHz'
            },
            {
                name: 'Size',
                value: '8 GB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Corsair',
        model: 'Vengeance 3200 16GB',
        modelNumber: 'cv3200-16',
        purchasePrice: 90,
        salePrice: 140,
        inventoryLevel: 18,
        category: Category.RAM,
        specificationFields: [
            {
                name: 'Speed',
                value: '3200 gHz'
            },
            {
                name: 'Size',
                value: '16 GB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Corsair',
        model: 'Vengeance 3200 32GB',
        modelNumber: 'cv3200-32',
        purchasePrice: 110,
        salePrice: 170,
        inventoryLevel: 7,
        category: Category.RAM,
        specificationFields: [
            {
                name: 'Speed',
                value: '3200 gHz'
            },
            {
                name: 'Size',
                value: '32 GB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Corsair',
        model: 'Vengeance 3200 64GB',
        modelNumber: 'cv3200-64',
        purchasePrice: 150,
        salePrice: 210,
        inventoryLevel: 3,
        category: Category.RAM,
        specificationFields: [
            {
                name: 'Speed',
                value: '3200 gHz'
            },
            {
                name: 'Size',
                value: '64 GB'
            }
        ],
        requiredPower: 10
    },
    /**
     * ~ Hard Drives ~
     * Type, Capacity
     */
    {
        manufacturer: 'Samsung',
        model: 'Evo Pro 970 1TB',
        modelNumber: 'evo970-1',
        purchasePrice: 90,
        salePrice: 150,
        inventoryLevel: 3,
        category: Category.HARD_DRIVE,
        specificationFields: [
            {
                name: 'Type',
                value: 'NVME SSD'
            },
            {
                name: 'Capacity',
                value: '1 GB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Samsung',
        model: 'Evo Pro 970 1TB x2 (RAID 0)',
        modelNumber: 'evo970-1-x2',
        purchasePrice: 180,
        salePrice: 280,
        inventoryLevel: 3,
        category: Category.HARD_DRIVE,
        specificationFields: [
            {
                name: 'Type',
                value: 'NVME SSD'
            },
            {
                name: 'Capacity',
                value: '2 GB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Samsung',
        model: 'Evo 870 500GB',
        modelNumber: 'evo870-1',
        purchasePrice: 60,
        salePrice: 85,
        inventoryLevel: 3,
        category: Category.HARD_DRIVE,
        specificationFields: [
            {
                name: 'Type',
                value: 'Sata SSD'
            },
            {
                name: 'Capacity',
                value: '500 GB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Seagate',
        model: 'Barracuda 1TB',
        modelNumber: 'barra1',
        purchasePrice: 60,
        salePrice: 85,
        inventoryLevel: 3,
        category: Category.HARD_DRIVE,
        specificationFields: [
            {
                name: 'Type',
                value: '7200 RPM'
            },
            {
                name: 'Capacity',
                value: '1 TB'
            }
        ],
        requiredPower: 10
    },
    {
        manufacturer: 'Seagate',
        model: 'Barracuda 4TB',
        modelNumber: 'barra4',
        purchasePrice: 150,
        salePrice: 210,
        inventoryLevel: 3,
        category: Category.HARD_DRIVE,
        specificationFields: [
            {
                name: 'Type',
                value: '7200 RPM'
            },
            {
                name: 'Capacity',
                value: '4 TB'
            }
        ],
        requiredPower: 10
    },
    /**
     * ~ Power Supply ~
     */
    {
        manufacturer: 'Corsair',
        model: 'TX 750',
        modelNumber: 'tx750',
        purchasePrice: 90,
        salePrice: 130,
        inventoryLevel: 3,
        category: Category.PSU,
        specificationFields: [
            {
                name: 'Wattage',
                value: '750'
            },
        ]
    },
    {
        manufacturer: 'Corsair',
        model: 'TX 500',
        modelNumber: 'tx500',
        purchasePrice: 70,
        salePrice: 90,
        inventoryLevel: 3,
        category: Category.PSU,
        specificationFields: [
            {
                name: 'Wattage',
                value: '500'
            },
        ]
    },
    {
        manufacturer: 'Corsair',
        model: 'TX 1000',
        modelNumber: 'tx1000',
        purchasePrice: 140,
        salePrice: 220,
        inventoryLevel: 3,
        category: Category.PSU,
        specificationFields: [
            {
                name: 'Wattage',
                value: '1000'
            },
        ]
    },
];
