import { Component, OnInit } from '@angular/core';
import { CartService, Order } from '../../services/cart.service';
import { Categories } from '../../models/categories.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public categories = Categories;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getTotal() {
    return this.cartService.cart
      .map(item => item.purchasePrice * item.quantity)
      .reduce((acc, cur) => acc + cur, 0);
  }

  checkout() {
    const order: Order = {
      items: this.cartService.cart,
      purchaseDate: (new Date()).toISOString(),
      paymentStatus: 'PENDING',
      paymentRecieved: false,
      paymentRecievedAmount: 0,
      shippingStatus: 'PENDING',
      shippingAddress: '',
    };
    this.cartService.addOrder(order);
    this.router.navigate(['checkout']);
    this.cartService.clearCart();
  }
}
