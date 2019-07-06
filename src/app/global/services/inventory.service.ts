import { Injectable } from '@angular/core';
import { BasePlatform } from '../models/base-platform';
import { PlatformHelpers } from '../helpers/platform-helpers';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public platforms: BasePlatform[];
  public activePlatforms: BasePlatform[];

  constructor() {
    this.platforms = PlatformHelpers.initBasePlatforms();
    this.activePlatforms = this.platforms.filter(p => p.active);
  }
}
