import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './../core/auth.service';
import { CartService } from './../cart/cart.service';

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

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addToCart(product) {
    // product.addedToCart();
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    // product.removedFromCart();
    // this.cartService.removeFromCart(product);
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
        this.rate = result;
      });
    }
  }

}
