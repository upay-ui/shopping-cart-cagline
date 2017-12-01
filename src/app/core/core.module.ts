import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  providers: [AuthService],
  exports: [NavComponent, SpinnerComponent],
  declarations: [NavComponent, SpinnerComponent]
})
export class CoreModule { }
