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
  MatTableModule,
  MatStepperModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSliderModule
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
    MatTableModule,
    MatStepperModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule
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
    MatTableModule,
    MatStepperModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule
  ],
  declarations: []
})
export class MaterialModule { }
