import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from '../cart/cart.service';
import { Product } from '../product/product';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartStateChanged: Subscription;
  public count;

  public cartItems;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private cartService: CartService,
    private _formBuilder: FormBuilder
  ) {
    this.count = this.cartService.cartCount;
    this.cartStateChanged = this.cartService.productsState.subscribe(status => {
      this.count = status;
      this.getCartItems();
    });
  }

  ngOnInit() {
    this.getCartItems();
    this.firstFormGroup = this._formBuilder.group({
    });
    this.secondFormGroup = this._formBuilder.group({
    });
  }

  getCartItems() {
    this.cartItems = this.cartService.getCart();
  }

  get totalPrice() {
    return this.cartService.totalPrice;
  }
}
