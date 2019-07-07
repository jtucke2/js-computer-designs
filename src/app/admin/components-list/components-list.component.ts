import { Component, OnInit, Input } from '@angular/core';
import { ComputerComponent, ComponentD } from 'src/app/global/models/component';
import { InventoryService } from 'src/app/global/services/inventory.service';

@Component({
  selector: 'components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  @Input() public set componentsObj(val: { [s: string]: ComputerComponent[] }) {
    this._componentsObj = val;
    this.componentsList = Object.entries(val)
      .map(([category, components]) => {
        return {
          category,
          components
        };
      });
  }

  public get componentsObj() {
    return this._componentsObj;
  }

  @Input() public platformId: string;

  public componentsList = [];

  private _componentsObj;

  constructor(private inventoryService: InventoryService) { }

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
  }

}
