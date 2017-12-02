import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../cart/cart.service';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: CartItem;

  constructor(private cartService: CartService
  ) { }

  ngOnInit() {
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }
}
