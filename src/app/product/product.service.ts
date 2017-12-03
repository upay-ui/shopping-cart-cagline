import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../core/auth.service';

import { Product } from './product';

@Injectable()
export class ProductService {

  productlist: AngularFireList<Product>;
  ratinglist: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {

  }

  getProducts() {
    this.productlist = this.db.list('/products');
    return this.productlist;
  }

  searchProducts(start, end) {
    this.productlist = this.db.list('/products', ref => {
      return ref.orderByChild('keywords').startAt(start.toLowerCase()).endAt(end.toLowerCase());
    });
    return this.productlist;
  }

  rateProduct(product, result) {
    this.ratinglist = this.db.list('/products/' + product.id + '/ratings');
    const rating = {};
    rating['rate'] = result;
    rating['UID'] = this.authService.currentUserId;
    this.ratinglist.push(rating);
    return this.ratinglist;
  }

}
