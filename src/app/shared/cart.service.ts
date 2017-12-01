import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  private productsSubject = new Subject<any>();
  productsState: any = this.productsSubject.asObservable();

  private products = [];
  constructor() { }

  addToCart(product) {
    this.products.push(product);
    this.productsSubject.next(this.getCartCount);
  }

  removeFromCart(product) {
    this.products.slice(product);
    this.productsSubject.next(this.getCartCount);
  }

  getCart() {
    return this.products;
  }

  get getCartCount() {
    return this.products.length;
  }
}
