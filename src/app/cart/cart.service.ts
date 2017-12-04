import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MatSnackBar } from '@angular/material';

import { Product } from '../product/product';
import { CartItem } from './cart-item/cart-item';

@Injectable()
export class CartService {
  private productsSubject = new Subject<any>();
  productsState: any = this.productsSubject.asObservable();

  private products = Array<CartItem>();

  constructor(
    private snackBar: MatSnackBar

  ) {
    const cart = localStorage.getItem('cart');
    this.products = CartItem.fromJSONArray(JSON.parse(cart) || []);
  }

  /**
   * Given product will added to cart and save to local db
   * @param product
   */
  addToCart(product) {

    const cartItem = new CartItem(product);
    this.products.push(cartItem);

    this.addToCartWithQuantity();

    this.saveCartLocally();

    this.snackBar.open('Product successfully added to your cart', 'Added', { duration: 2000 });
    this.productsSubject.next(this.cartCount);
  }

  /**
   * If the added product is already in the cart, quantity of the exsiting product will be increase 
   * and remove the duplicaited product
   */
  addToCartWithQuantity() {
    const seen = {};
    this.products = this.products.reduce((p, c) => {
      if (seen.hasOwnProperty(c.id)) {
        p[seen[c.id]].quantity = p[seen[c.id]].quantity + 1;
        return p;
      } else {
        seen[c.id] = p.length;
        return p.concat(c);
      }
    }, []);
  }

  /**
   * Given product remove from the cart
   * @param product
   */
  removeFromCart(product) {

    this.products = this.products.filter(p => {
      return p.id !== product.id;
    });
    this.saveCartLocally();
    this.snackBar.open('Product has been removed from your cart', 'Removed', { duration: 2000 });
    this.productsSubject.next(this.cartCount);
  }

  /**
   * Save the all product list into local storage
   */
  saveCartLocally() {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  /**
   * return procut list
   */
  getCart() {
    return this.products;
  }

  /**
   * get number of individual products in cart considering quantity
   *
   */
  get cartCount() {
    return this.products.reduce((p, c) => {
      const sum = p + Number(c.quantity);
      return sum;
    }, 0);
  }

  /**
   * get total price considering quantity
   */
  get totalPrice() {
    return this.products.reduce((p, c) => {
      const sum = p + Number(c.price * c.quantity);
      return sum;
    }, 0);
  }
}
