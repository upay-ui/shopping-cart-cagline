import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  products: Product[];
  private prodSubscription: Subscription;
  private searchProdSubs: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    // this.searchProducts();

  }

  ngAfterViewInit() {

    this.getProducts();
  }

  ngOnDestroy() {
    if (typeof this.searchProdSubs !== 'undefined') {
      this.searchProdSubs.unsubscribe();
    }
    if (typeof this.prodSubscription !== 'undefined') {
      this.prodSubscription.unsubscribe();
    }
  }

  getProducts() {
    this.prodSubscription = this.productService.getProducts().snapshotChanges().subscribe(items => {
      this.products = items.map(item => {
        const product = item.payload.val();
        product['id'] = item.key;
        return new Product(product);
      });

    });
  }

  search($event) {
    const queryText = $event.target.value;
    const start = queryText.toLowerCase();
    const end = queryText.toLowerCase() + '\uf8ff';

    if (typeof this.searchProdSubs !== 'undefined') {
      this.searchProdSubs.unsubscribe();
    }

    this.searchProdSubs = this.productService.searchProducts(start, end).snapshotChanges().subscribe(items => {
      this.products = items.map(item => {
        const product = item.payload.val();
        product['id'] = item.key;
        return new Product(product);
      });
    });
  }
}
