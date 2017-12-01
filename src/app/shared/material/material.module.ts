import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSlideToggleModule,
  MatCardModule,
  MatCardTitle,
  MatCardContent,
  MatGridListModule,
  MatGridList,
  MatGridTile,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
