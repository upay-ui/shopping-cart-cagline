import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from '../cart/cart.service';
import { Product } from '../product/product';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartStateChanged: Subscription;
  public count;

  public cartItems;

  constructor(
    private cartService: CartService,

  ) {
    this.count = this.cartService.getCartCount;
    this.cartStateChanged = this.cartService.productsState.subscribe(status => {
      this.count = status;
      this.getCartItems();
    });
  }

  ngOnInit() {
    this.getCartItems();

  }

  getCartItems() {
    this.cartItems = this.cartService.getCart();
  }
}
