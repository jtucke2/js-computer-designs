import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Order } from 'src/app/global/services/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    ccNumber: new FormControl('', Validators.required),
    ccv: new FormControl('', Validators.required),
    expDate: new FormControl(new Date(), Validators.required),
    allowProc: new FormControl(null, Validators.required),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { order: Order },
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close({
      success: false
    });
  }

  process() {
    this.dialogRef.close({
      success: this.form.status === 'VALID'
    });
  }

}
