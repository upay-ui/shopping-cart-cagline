import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  private cartStateChanged: Subscription;

  public products;

  public count;
  public totalPrice;
  constructor(
    private cartService: CartService
  ) {
    this.cartStateChanged = this.cartService.productsState.subscribe(status => {
      this.count = status;
      this.getCartItems();
    });
  }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.products = this.cartService.getCart();
    this.totalPrice = this.cartService.totalPrice;
    this.count = this.cartService.cartCount;
  }

}
