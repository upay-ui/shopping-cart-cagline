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
  MatSliderModule,
  MatTooltipModule
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
    MatSliderModule,
    MatTooltipModule
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
    MatSliderModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
