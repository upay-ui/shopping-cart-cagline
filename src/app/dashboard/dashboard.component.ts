import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../core/auth.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  startWith = new Subject();
  endWith = new Subject();

  products: Product[];

  private productsStateChanged: Subscription;
  private startWithStateChanged: Subscription;
  private endWithStateChanged: Subscription;


  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.searchProducts();

  }

  getProducts() {
    this.productsStateChanged = this.productService.getProducts().subscribe(res => {
      this.products = Product.fromJSONArray(res);
      this.productMarkAsAddedToCart();

    });
  }

  searchProducts() {
    this.startWithStateChanged = this.startWith.subscribe(start => {
      this.endWithStateChanged = this.endWith.subscribe(end => {
        this.productService.searchProducts(start, end).subscribe(res => {
          this.products = Product.fromJSONArray(res);
          this.productMarkAsAddedToCart();
          this.endWithStateChanged.unsubscribe();
          this.startWithStateChanged.unsubscribe();
        });
      });
    });
  }

  productMarkAsAddedToCart() {
    this.products = this.productService.productMarkAsAddedToCart(this.products);
  }

  search($event) {
    const queryText = $event.target.value;
    this.startWith.next(queryText);
    this.endWith.next(queryText + '\uf8ff');
  }

  ngOnDestroy() {
    this.productsStateChanged.unsubscribe();

  }
}
