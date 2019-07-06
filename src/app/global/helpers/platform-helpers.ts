import { BasePlatform } from '../models/base-platform';
import { defaultPlatforms } from '../models/base-platform-data';

export class PlatformHelpers {
    static initBasePlatforms(): BasePlatform[] {
        // TODO add handling for local storage
        return defaultPlatforms;
    }

    static foo() {
        return 3;
    }
}
