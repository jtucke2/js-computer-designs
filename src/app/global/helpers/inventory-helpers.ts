import { BasePlatform } from '../models/base-platform';
import { defaultPlatforms } from '../models/base-platform-data';
import { ComputerComponent, ComponentManufacturer, ComponentCategory } from '../models/component';
import { defaultComponentsData, defaultComponentManufacturers, defaultComponentCategories } from '../models/component-data';

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
}
