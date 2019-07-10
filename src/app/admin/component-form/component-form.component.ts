import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../global/services/inventory.service';

@Component({
  selector: 'component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.scss']
})
export class ComponentFormComponent implements OnInit {

  constructor(public inventoryService: InventoryService) { }

  ngOnInit() {
  }

}
