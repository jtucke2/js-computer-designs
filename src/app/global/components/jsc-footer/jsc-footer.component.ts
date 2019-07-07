import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'jsc-footer',
  templateUrl: './jsc-footer.component.html',
  styleUrls: ['./jsc-footer.component.scss']
})
export class JscFooterComponent implements OnInit {

  constructor(public inventoryService: InventoryService) { }

  ngOnInit() {
  }

}
