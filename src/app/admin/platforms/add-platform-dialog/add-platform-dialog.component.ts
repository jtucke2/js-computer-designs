import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InventoryService } from '../../../global/services/inventory.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as UUID from 'uuid';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'add-platform-dialog',
  templateUrl: './add-platform-dialog.component.html',
  styleUrls: ['./add-platform-dialog.component.scss']
})
export class AddPlatformDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddPlatformDialogComponent>,
    public inventoryService: InventoryService,
    public adminService: AdminService,
  ) { }

  ngOnInit() {
  }

  public cancel() {
    this.dialogRef.close();
  }

  public save() {
    const id = UUID.v4();
    console.log('~~~~', id);
    const platform = {
      ...this.adminService.platformForm.value,
      id
    };
    // TODO update inventory service
    this.dialogRef.close();
  }

}
