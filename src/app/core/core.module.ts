import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { environment } from './../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { AuthService } from './auth.service';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    AuthService,
    ProductService,
    CartService,
  ],
  exports: [
    SharedModule,
    NavComponent,
    SpinnerComponent
  ],
  declarations: [NavComponent, SpinnerComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
