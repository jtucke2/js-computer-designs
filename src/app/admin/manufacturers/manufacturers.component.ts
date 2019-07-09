import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/global/services/inventory.service';
import { MatDialog } from '@angular/material';
import { SnackbarService } from 'src/app/global/services/snackbar.service';
import { ComponentManufacturer } from 'src/app/global/models/component';
import { AddManufacturerDialogComponent } from './add-manufacturer-dialog/add-manufacturer-dialog.component';

@Component({
  selector: 'manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.scss']
})
export class ManufacturersComponent implements OnInit {

  constructor(
    public inventoryService: InventoryService,
    private dialog: MatDialog,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
  }

  public saveChanges(m: ComponentManufacturer) {
    const componentManufacturers = this.inventoryService.componentManufacturers;
    const compManuIdx = componentManufacturers.findIndex(cm => cm.name === m.name);
    componentManufacturers[compManuIdx] = m;
    this.inventoryService.componentManufacturers = componentManufacturers;
    this.sbs.openSnackbar(`Updated ${m.name} Manufacturer`);
  }

  public openDialog() {
    this.dialog.open(AddManufacturerDialogComponent, { width: '90vw', maxWidth: '800px' });
  }

}
