import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MatSnackBar } from '@angular/material';

import { Product } from '../product/product';

@Injectable()
export class CartService {
  private productsSubject = new Subject<any>();
  productsState: any = this.productsSubject.asObservable();

  private products = Array<Product>();

  constructor(
    private snackBar: MatSnackBar

  ) {
    const cart = localStorage.getItem('cart');
    this.products = JSON.parse(cart) || [];
  }

  addToCart(product) {
    this.products.push(product);
    this.saveCartLocally();
    this.snackBar.open('Product successfully added to your cart', 'Added', { duration: 2000 });

    this.productsSubject.next(this.cartCount);
  }

  removeFromCart(product) {
    this.products = this.products.filter(p => {
      return p.id !== product.id;
    });
    this.saveCartLocally();
    this.snackBar.open('Product has been removed from your cart', 'Removed', { duration: 2000 });
    this.productsSubject.next(this.cartCount);
  }

  saveCartLocally() {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  getCart() {
    return this.products;
  }

  get cartCount() {
    // this.productsSubject.next(this.cartCount);
    return this.products.length;
  }

  get totalPrice() {
    return this.products.reduce((p, c) => {
      console.log(p, Number(c.price));
      return p = p + Number(c.price);
    }, 0);
  }
}
