import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

import { Constants } from '../app-constants';
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

  /**
   * Get all Product list
   */
  getProducts() {
    this.productlist = this.db.list(Constants.firedbProducts);
    return this.productlist;
  }

  /**
   * Search for given key word with start and end
   * Ex Start = query, End =  query\uf8ff
   *
   * @param start
   * @param end
   */
  searchProducts(start, end) {
    this.productlist = this.db.list(Constants.firedbProducts, ref => {
      return ref.orderByChild('keywords').startAt(start).endAt(end);
    });
    return this.productlist;
  }

  /**
   * Rate Prodcut for fiven product and rate
   * Ex Rate = x/10
   *
   * @param product
   * @param result
   */
  rateProduct(product, result) {
    this.ratinglist = this.db.list(Constants.firedbProducts + '/' + product.id + Constants.firedbRatings);
    const rating = {};
    rating['rate'] = result;
    rating['UID'] = this.authService.currentUserId;
    this.ratinglist.push(rating);
    return this.ratinglist;
  }

}
