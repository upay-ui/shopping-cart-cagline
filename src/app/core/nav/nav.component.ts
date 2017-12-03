import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../core/auth.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public currentUser;
  public currentUserDisplayName;
  private currentUserStateChanged: Subscription;

  private cartStateChanged: Subscription;
  public count;

  constructor(
    private authService: AuthService,
    private cartService: CartService,

  ) {

  }

  ngOnInit() {

    this.count = this.cartService.cartCount;

    this.currentUserStateChanged = this.authService.authState.subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.currentUserDisplayName = this.authService.currentUserDisplayName;
    });

    this.cartStateChanged = this.cartService.productsState.subscribe(status => {
      this.count = status;
    });
  }

  signOut() {
    this.authService.signOut();
  }

  ngOnDestroy() {
    this.currentUserStateChanged.unsubscribe();
    this.cartStateChanged.unsubscribe();
  }
}
