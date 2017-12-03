import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { MatSnackBar } from '@angular/material';

import { AuthService } from './../core/auth.service';
import { CartService } from './../cart/cart.service';
import { ProductService } from './product.service';

import { Product } from './product';

import { RateDialogComponent } from '../rate-dialog/rate-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  public rate;
  private authSubs: Subscription;
  public currentUser;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private authService: AuthService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {

  }

  ngDistory() {

  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  openDialog(): void {

    if (this.authService.authenticated) {
      const dialogRef = this.dialog.open(RateDialogComponent, {
        data: {
          product: this.product,
          rate: this.rate
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.rateProduct(result);
        this.rate = result;
      });
    } else {
      this.snackBar.open('Please login before rate this product', 'Error', { duration: 2000 });
    }
  }

  rateProduct(result) {
    console.log(result);
    this.productService.rateProduct(result).snapshotChanges().subscribe(res => {
      console.log(res);
    });

  }

}
