import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../core/auth.service';

import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {

  }

  // getProducts(): Observable<any[]> {
  //   return this.db.list('/products', ref => ref.orderByChild('price')).valueChanges();
  // }

  getProducts() {
    const productlist: AngularFireList<Product> = this.db.list('/products');
    return productlist.valueChanges();
  }

  searchProducts(start, end) {
    const productlist: AngularFireList<Product> = this.db.list('/products', ref => {
      return ref.orderByChild('keywords').startAt(start.toLowerCase()).endAt(end.toLowerCase());
    });
    return productlist.valueChanges();
  }

  // productMarkAsAddedToCart(products: Array<Product>) {
  //   const cart = localStorage.getItem('cart');
  //   const productsInCart: Array<Product> = JSON.parse(cart);

  //   return products.map(p => {
  //     const isInCart = productsInCart.filter(x => p.id === x.id);
  //     if (isInCart.length > 0) {
  //       p.addedToCart();
  //     }
  //     return p;
  //   });
  // }
}
