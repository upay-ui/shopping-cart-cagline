import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';

import { Constants } from '../app-constants';
import { AuthService } from '../core/auth.service';
// import { Login } from './login';
// import { Register } from './register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginPwdHide: Boolean = true;
  registerPwdHide: Boolean = true;

  // logingM: Login;
  // registerForm: Register;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,

  ) {
    this.authService.authState.subscribe(auth => {
      if (auth) {
        this.router.navigate([Constants.routeDashboard]);
      }
    });

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    this.registerForm = this.fb.group({
      'email': ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      'password': ['',
        [
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ],
      'mobile': ['',
        [
          Validators.required,
        ]
      ],
    });
  }

  login() {
    this.authService.emailLogin(this.loginForm.value.email, this.loginForm.value.password).then((data) => {
      console.log(data);
    });
  }

  register() {

  }

  signUp() {
    this.authService.emailSignUp(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value).then((data) => {
    });
  }

  loginWithGoogle() {
    this.authService.googleLogin().then((data) => {
      this.navigateToDashboard();
    });
  }

  loginWithFacebook() {
    this.authService.facebookLogin().then((data) => {
      this.navigateToDashboard();
    });
  }

  loginWithGithub() {
    this.authService.githubLogin().then((data) => {
      this.navigateToDashboard();
    });
  }

  navigateToDashboard() {
    if (this.authService.currentUser) {
      this.router.navigate([Constants.routeDashboard]);
    }
  }


}
