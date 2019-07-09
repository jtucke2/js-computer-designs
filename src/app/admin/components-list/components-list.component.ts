import { Component, OnInit, Input } from '@angular/core';
import { ComputerComponent, ComponentD } from 'src/app/global/models/component';
import { InventoryService } from 'src/app/global/services/inventory.service';
import { CategoriesWithSpecifications } from 'src/app/global/models/categories.enum';
import { SnackbarService } from 'src/app/global/services/snackbar.service';
import { MatDialog } from '@angular/material';
import { AddComponentDialogComponent } from '../platforms/add-component-dialog/add-component-dialog.component';

@Component({
  selector: 'components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  @Input() public componentsObj: any;

  public CategoriesWithSpecifications = CategoriesWithSpecifications;

  @Input() public platformId: string;

  public componentsList = [];

  constructor(
    private inventoryService: InventoryService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public trackComponents(index: number, item: ComponentD) {
    return item.modelNumber;
  }

  public makeDefaultComponent(category: string, modelNumber: string) {
    const platforms = this.inventoryService.platforms;
    const platformIdx = platforms.findIndex(p => p.id === this.platformId);
    platforms[platformIdx].defaultComponents[category] = modelNumber;
    this.inventoryService.platforms = platforms;
    this.snackbarService.openSnackbar(`Updated Default ${category}`);
  }

  public removeComponent(category: string, modelNumber: string) {
    const platforms = this.inventoryService.platforms;
    const platformIdx = platforms.findIndex(p => p.id === this.platformId);
    const compIdx = platforms[platformIdx].components[category].findIndex(mn => mn === modelNumber);
    if (compIdx > -1) {
      platforms[platformIdx].components[category].splice(compIdx, 1);
      this.snackbarService.openSnackbar(`Removed Component From Platform`);
      if (platforms[platformIdx].defaultComponents[category] === modelNumber) {
        platforms[platformIdx].defaultComponents[category] = '';
      }
      console.log(platforms[platformIdx]);
      this.inventoryService.platforms = platforms;
    } else {
      this.snackbarService.openSnackbar('Unable to Remove Component');
    }
  }

  public addComponentDialog(category, components) {
    console.log(category, components);
    this.dialog.open(AddComponentDialogComponent, {
      data: { category, components, platformId: this.platformId },
      width: '400px',
      maxWidth: '90vw'
    });
  }

}
