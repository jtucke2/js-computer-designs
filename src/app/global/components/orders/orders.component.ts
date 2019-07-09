import { Component, OnInit } from '@angular/core';
import { Order } from '../../services/cart.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersDat: Partial<Order>[] = [
    {
      shippingStatus: 'IN_PROGRESS',
      items: [
        {
          name: 'Ninja Series',
          image: './assets/images/1000D-Built-27.png',
          purchasePrice: 2432
        } as any,
      ]
    },
    {
      shippingStatus: 'COMPLETE',
      deliveredDate: 'May 3rd, 2019',
      items: [
        {
          name: 'Pro Series',
          image: './assets/images/Carbide-600Q-01.png',
          purchasePrice: 3432
        } as any,
      ]
    },
    {
      shippingStatus: 'COMPLETE',
      deliveredDate: 'May 3rd, 2019',
      items: [
        {
          name: 'Ninja Series',
          image: './assets/images/1000D-Built-27.png',
          purchasePrice: 2334
        } as any,
        {
          name: 'Frag Series',
          image: './assets/images/570X-RGB-MB-01-RED.png',
          purchasePrice: 1432
        } as any,
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
