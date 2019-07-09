import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/global/services/inventory.service';
import { MatDialog } from '@angular/material';
import { SnackbarService } from 'src/app/global/services/snackbar.service';
import { ComponentD } from 'src/app/global/models/component';
import { InventoryHelpers } from 'src/app/global/helpers/inventory-helpers';
import { CreateComponentDialogComponent } from './create-component-dialog/create-component-dialog.component';

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(
    public inventoryService: InventoryService,
    private dialog: MatDialog,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
  }

  public trackByCc(_, cc) { return cc.category; }

  public trackByComp(_, c) { return c.modelNumber; }

  public openDialog(category) {
    this.dialog.open(CreateComponentDialogComponent, { width: '90vw', maxWidth: '800px', data:  { category }});
  }

  public saveChanges(componentD: ComponentD) {
    const component = InventoryHelpers.componentDToComponent(componentD);
    const components = this.inventoryService.components;
    const compIdx = components.findIndex(c => c.modelNumber === component.modelNumber);
    components[compIdx] = component;
    this.inventoryService.components = components;
    this.sbs.openSnackbar(`Updated ${component.manufacturer} ${component.model} Component`);
  }
}
