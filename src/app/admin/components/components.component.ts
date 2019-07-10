import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../global/services/inventory.service';
import { MatDialog } from '@angular/material';
import { SnackbarService } from '../../global/services/snackbar.service';
import { ComponentD } from '../../global/models/component';
import { InventoryHelpers } from '../../global/helpers/inventory-helpers';
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
