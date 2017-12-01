import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  private productsSubject = new Subject<any>();
  productsState: any = this.productsSubject.asObservable();

  private products = [];
  constructor() {
    const cart = localStorage.getItem('cart');
    this.products = JSON.parse(cart) || [];
  }

  addToCart(product) {
    this.products.push(product);
    this.saveCartLocally();
    this.productsSubject.next(this.getCartCount);
  }

  removeFromCart(product) {
    this.products = this.products.filter(p => {
      return p.id !== product.id;
    });
    this.saveCartLocally();
    this.productsSubject.next(this.getCartCount);
  }

  saveCartLocally() {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  getCart() {
    return this.products;
  }

  get getCartCount() {
    // this.productsSubject.next(this.getCartCount);
    return this.products.length;
  }
}
