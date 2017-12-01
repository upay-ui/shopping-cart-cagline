import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { CdkTableModule } from '@angular/cdk/table';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

import { ProductService } from './product/product.service';
import { CartService } from './cart/cart.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ProductGridComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    // CdkTableModule,
    AppRoutingModule,

  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
