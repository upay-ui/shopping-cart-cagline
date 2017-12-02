import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductComponent } from './product/product.component';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ProductGridComponent,
    ProductComponent,
    RateDialogComponent,
    CartItemsComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent],
  entryComponents: [RateDialogComponent]
})
export class AppModule { }
