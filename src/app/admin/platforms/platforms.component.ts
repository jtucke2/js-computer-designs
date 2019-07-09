import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../global/services/inventory.service';
import { MatDialog } from '@angular/material';
import { AddPlatformDialogComponent } from './add-platform-dialog/add-platform-dialog.component';
import { BasePlatformD } from 'src/app/global/models/base-platform';
import { InventoryHelpers } from 'src/app/global/helpers/inventory-helpers';
import { SnackbarService } from 'src/app/global/services/snackbar.service';

@Component({
  selector: 'platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  constructor(
    public inventoryService: InventoryService,
    private dialog: MatDialog,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
  }

  trackById(_, item) { return item.id; }

  openDialog() {
    this.dialog.open(AddPlatformDialogComponent, { width: '90vw', maxWidth: '1200px', height: '90vh' });
  }

  saveChanges(platform: BasePlatformD) {
    const updatedPlatform = InventoryHelpers.platformDToPlatform(platform);
    const platforms = this.inventoryService.platforms;
    const platformIdx = platforms.findIndex(p => p.id === platform.id);
    platforms[platformIdx] = updatedPlatform;
    this.inventoryService.platforms = platforms;
    this.sbs.openSnackbar(`Updated ${platform.name} Platform`);
  }
}
