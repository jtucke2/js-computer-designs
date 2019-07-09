import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { InventoryService } from 'src/app/global/services/inventory.service';
import { SnackbarService } from 'src/app/global/services/snackbar.service';

@Component({
  selector: 'add-manufacturer-dialog',
  templateUrl: './add-manufacturer-dialog.component.html',
  styleUrls: ['./add-manufacturer-dialog.component.scss']
})
export class AddManufacturerDialogComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddManufacturerDialogComponent>,
    private inventoryService: InventoryService,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const { value: m } = this.form;
    const ms = this.inventoryService.componentManufacturers;
    ms.push(m);
    this.inventoryService.componentManufacturers = ms;
    this.dialogRef.close();
    this.sbs.openSnackbar(`Added ${m.name} Manufacturer`);
  }

}
