import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-rate-dialog',
    templateUrl: './rate-dialog.component.html',
    styleUrls: ['./rate-dialog.component.scss']
})
export class RateDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<RateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
