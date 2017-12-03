import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';

import { Constants } from '../app-constants';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth

  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('canActivate', this.authService.authenticated, this.authService.currentUser, this.authService.authState);
    return this.afAuth.authState.map(auth => {
      console.log('LoginRouteGuard', auth);
      if (!auth) {
        return true;
      } else {
        this.router.navigate([Constants.routeDashboard]);
        return false;
      }
    });
  }
}
