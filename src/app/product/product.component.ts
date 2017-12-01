import { Component, OnInit, Input } from '@angular/core';

import { CartService } from './../cart/cart.service';

import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }

  addToCart(product) {
    product.addedToCart();
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    product.removedFromCart();
    this.cartService.removeFromCart(product);
  }


}
