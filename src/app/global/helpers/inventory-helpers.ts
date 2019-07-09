import { BasePlatform, BasePlatformD, CartPlatform } from '../models/base-platform';
import { defaultPlatforms } from '../models/base-platform-data';
import { ComputerComponent, ComponentManufacturer, ComponentCategory, ComponentD } from '../models/component';
import { defaultComponentsData, defaultComponentManufacturers, defaultComponentCategories } from '../models/component-data';
import { Categories } from '../models/categories.enum';

export class InventoryHelpers {
    static initBasePlatforms(): BasePlatform[] {
        // TODO add handling for local storage
        const platforms = localStorage.getItem('platforms');
        return platforms ? JSON.parse(platforms) : defaultPlatforms;
    }

    static initComponents(): ComputerComponent[] {
        const components = localStorage.getItem('components');
        return components ? JSON.parse(components) : defaultComponentsData;
    }

    static initComponentManufacturers(): ComponentManufacturer[] {
        const componentManufacturers = localStorage.getItem('componentManufacturers');
        return componentManufacturers ? JSON.parse(componentManufacturers) : defaultComponentManufacturers;
    }

    static initComponentCategories(): ComponentCategory[] {
        return defaultComponentCategories;
    }

    static platformDToPlatform(platformD: BasePlatformD): BasePlatform {
        const retVal: BasePlatform = {
            ...platformD,
            components: {}
        };
        Categories.forEach(cat => {
            if (platformD.components[cat]) {
                retVal.components[cat] = platformD.components[cat].map(c => c.modelNumber);
            } else {
                retVal.components[cat] = [];
            }
        });
        return retVal;
    }

    static platformDToCartPlatform(platformD: BasePlatformD, componentSelections: { [s: string]: string }, purchasePrice): CartPlatform {
        const retVal: CartPlatform = {
            ...platformD,
            components: {},
            purchasePrice,
            quantity: 1,
        };
        Categories.forEach(cat => {
            if (platformD.components[cat]) {
                retVal.components[cat] = platformD.components[cat].find(c => c.modelNumber === componentSelections[cat]);
            } else {
                retVal.components[cat] = null;
            }
        });
        return retVal;
    }

    static componentDToComponent(compoentD: ComponentD): ComputerComponent {
        const retVal = {
            ...compoentD,
            manufacturer: compoentD.manufacturer.name
        };

        delete retVal.isDefault;
        return retVal as ComputerComponent;
    }
}
