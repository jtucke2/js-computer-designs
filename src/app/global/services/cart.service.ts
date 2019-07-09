import { Injectable } from '@angular/core';
import { CartPlatform } from '../models/base-platform';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

export interface Order {
  items: CartPlatform[];
  paymentStatus: 'PENDING' | 'COMPLETE' | 'ERROR';
  paymentRecieved: boolean;
  paymentRecievedAmount: number;
  purchaseDate: string;
  shippingStatus: 'PENDING' | 'IN_PROGRESS' | 'DELAYED' | 'COMPLETE';
  shippingAddress: string;
  deliveredDate?: string;
}

export interface OrdersDb {
  orders: {
    user: User,
    orders: Order[]
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public ordersDb$ = new BehaviorSubject<OrdersDb>({ orders: [] });
  public get cart(): CartPlatform[] {
    return this._cart;
  }
  public set cart(cart: CartPlatform[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this._cart = cart;
  }
  private _cart;

  public get ordersDb(): OrdersDb {
    return this.ordersDb$.getValue();
  }
  public set ordersDb(ordersDb: OrdersDb) {
    localStorage.setItem('ordersdb', JSON.stringify(ordersDb));
    this.ordersDb$.next(ordersDb);
  }

  constructor(private userService: UserService) {
    this.cart = this.initCart();
    this.ordersDb = this.initOrdersDb();
  }

  initCart(): CartPlatform[] {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }

  initOrdersDb(): OrdersDb {
    const db = localStorage.getItem('ordersdb');
    return db ? JSON.parse(db) : { orders: [] };
  }

  addItemToCart(item: CartPlatform) {
    const cart = this.cart;
    cart.push(item);
    this.cart = cart;
  }

  removeItemFromCart(idx: number) {
    const cart = this.cart;
    cart.splice(idx, 1);
    this.cart = cart;
  }

  clearCart() {
    this.cart = [];
  }

  addOrder(order: Order) {
    const { user } = this.userService;
    const orders = this.ordersDb.orders;
    const idx = orders.findIndex(od => od.user.email === user.email);
    if (idx > -1) {
      orders[idx].orders.push(order);
    } else {
      orders.push({ user, orders: [order] });
    }
    this.ordersDb = { orders };
  }
}
