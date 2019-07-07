import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../global/services/inventory.service';
import { MatDialog } from '@angular/material';
import { AddPlatformDialogComponent } from './add-platform-dialog/add-platform-dialog.component';

@Component({
  selector: 'platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  constructor(
    public inventoryService: InventoryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    // this.dialog.open(AddPlatformDialogComponent, { width: '400px', maxWidth: '90vw' });
  }

  trackById(idx, item) { return item.id; }

  openDialog() {
    this.dialog.open(AddPlatformDialogComponent, { width: '90vw', maxWidth: '1200px', height: '90vh' });
  }
}
