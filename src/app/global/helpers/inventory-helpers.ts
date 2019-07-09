import { BasePlatform, BasePlatformD } from '../models/base-platform';
import { defaultPlatforms } from '../models/base-platform-data';
import { ComputerComponent, ComponentManufacturer, ComponentCategory } from '../models/component';
import { defaultComponentsData, defaultComponentManufacturers, defaultComponentCategories } from '../models/component-data';
import { Categories } from '../models/categories.enum';

export class InventoryHelpers {
    static initBasePlatforms(): BasePlatform[] {
        // TODO add handling for local storage
        return defaultPlatforms;
    }

    static initComponents(): ComputerComponent[] {
        return defaultComponentsData;
    }

    static initComponentManufacturers(): ComponentManufacturer[] {
        return defaultComponentManufacturers;
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
}
