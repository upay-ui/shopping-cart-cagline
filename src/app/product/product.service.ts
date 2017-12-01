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

}
