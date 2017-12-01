import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [CartService],

  exports: [MaterialModule],
  declarations: []
})
export class SharedModule { }
