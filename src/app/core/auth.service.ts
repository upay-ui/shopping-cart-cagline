import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Subject } from 'rxjs/Subject';


import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  private authSubject = new Subject<any>();

  authState: any = this.authSubject.asObservable();
  user: any= null;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        this.user = auth;
        this.authSubject.next(this.authState);
      } else {
        this.authSubject.next(false);
      }
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.user !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.user.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.user) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.user['displayName'] || 'User without a Name';
    }
  }

  //// Social Auth ////
  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.user = credential.user;
        this.updateUserData();
      })
      .catch(error => {
        this.snackBar.open(error.message, 'Error');
      });
  }


  //// Anonymous Auth ////
  anonymousLogin(userData?: any) {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.user = user;
        this.updateUserData(userData);
      })
      .catch(error => {
        this.snackBar.open(error.message, 'Error', { duration: 2000 });
      });
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string, userData?: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user;
        this.updateUserData(userData);
      })
      .catch(error => {
        this.snackBar.open(error.message, 'Error');
      });
  }

  emailLogin(email: string, password: string, userData?: any) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user;
        this.updateUserData(userData);
      })
      .catch(error => {
        this.snackBar.open(error.message, 'Error', { duration: 2000 });
      });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch(error => {
        this.snackBar.open(error.message, 'Error', { duration: 2000 });
      });
  }


  //// Sign Out ////
  signOut(): void {
    this.authState = this.authSubject.asObservable();
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


  //// Helpers ////
  private updateUserData(userData?: any): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const data = {
      email: this.user.email,
      name: this.user.displayName || this.user.email,
    };
    if ((userData || {}).mobile) {
      data['mobile'] = userData.mobile;
    }

    this.db.object(path).update(data)
      .catch(error => {
        this.snackBar.open(error.message, 'Error', { duration: 2000 });
      });
  }

}
