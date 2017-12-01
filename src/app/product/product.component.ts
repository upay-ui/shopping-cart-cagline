import { Component, OnInit, Input } from '@angular/core';

import { CartService } from './../shared/cart.service';

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
    this.cartService.addToCart(product.addedToCart());
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product.removedFromCart());
  }


}
