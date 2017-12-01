import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {
  MatToolbarModule,
  MatSlideToggleModule,
  MatCardModule,
  MatCardTitle,
  MatCardContent,
  MatGridListModule,
  MatGridList,
  MatGridTile
} from '@angular/material';

import { AuthService } from '../core/auth.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  startWith = new Subject();
  endWith = new Subject();

  products: Product[];
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
    this.productService.getProducts().subscribe(res => {
      this.products = Product.fromJSONArray(res);
    });
  }

  searchProducts() {
    this.startWith.subscribe(start => {
      this.endWith.subscribe(end => {
        this.productService.searchProducts(start, end).subscribe(res => {
          this.products = Product.fromJSONArray(res);
        });
      });
    });
  }

  search($event) {
    const queryText = $event.target.value;
    this.startWith.next(queryText);
    this.endWith.next(queryText + '\uf8ff');
  }
}
