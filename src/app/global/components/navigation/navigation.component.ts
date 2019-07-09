import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    public userService: UserService,
    public cartService: CartService,
  ) { }

  ngOnInit() {
  }

}
