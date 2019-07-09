export enum Category {
    CPU = 'CPU',
    GPU = 'GPU',
    RAM = 'RAM',
    HARD_DRIVE = 'Hard Drive',
    PSU = 'Power Supply'
}

export const Categories = [
    Category.CPU,
    Category.GPU,
    Category.RAM,
    Category.HARD_DRIVE,
    Category.PSU
];

export const CategorySpecificationFields: { [s: string]: string[] } = {
    [Category.CPU]: [
        'Speed',
        'Cache Size',
        'Core Count',
        'Motherboard Type'
    ],
    [Category.GPU]: [
        'Speed',
        'Memory',
    ],
    [Category.RAM]: [
        'Size',
        'Speed'
    ],
    [Category.HARD_DRIVE]: [
        'Type',
        'Capacity'
    ],
    [Category.PSU]: [
        'Wattage'
    ]
};

export const CategoriesWithSpecifications = Categories
    .map((category) => ({ category, specificationFields: CategorySpecificationFields[category] }));
