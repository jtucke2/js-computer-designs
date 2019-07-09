import { Component, OnInit } from '@angular/core';
import { CartService, Order } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public order: Order;
  public userOrderDbIdx;
  public orderIdx;
  public errorMessage = '';

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private dialog: MatDialog,
    private sbs: SnackbarService,
    private router: Router,
  ) { }

  ngOnInit() {
    const { email } = this.userService.user;
    this.userOrderDbIdx = this.cartService.ordersDb.orders.findIndex(odb => odb.user.email === email);
    if (this.userOrderDbIdx > -1) {
      const orders = this.cartService.ordersDb.orders[this.userOrderDbIdx].orders;
      this.orderIdx = orders.findIndex(o => o.paymentStatus === 'PENDING');
      if (this.orderIdx > -1) {
        this.order = orders[this.orderIdx];
      }
    }
  }

  getTotal() {
    return this.order.items
      .map(item => item.purchasePrice * item.quantity)
      .reduce((acc, cur) => acc + cur, 0);
  }

  purchase() {
    const ref = this.dialog.open(PaymentDialogComponent, { width: '90vw', maxWidth: '800px', data: { order: this.order}});
    ref.afterClosed()
      .subscribe(res => {
        if (res.success) {
          this.errorMessage = '';
          this.order.paymentRecievedAmount = this.getTotal();
          this.order.paymentRecieved = true;
          this.order.shippingStatus = 'IN_PROGRESS';
          this.cartService.ordersDb.orders[this.userOrderDbIdx].orders[this.orderIdx] = this.order;
          this.router.navigate(['/home']);
          this.sbs.openSnackbar('Order Complete');
        } else {
          this.errorMessage = 'Unable to complete payment.';
        }
      });
  }

}
