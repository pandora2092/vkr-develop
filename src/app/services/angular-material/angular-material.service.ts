import { MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AngularMaterialService {
  snackBarConfig: MatSnackBarConfig;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  constructor(
    private snackBar: MatSnackBar,
    public router: Router,
    ) { }

  /*parametres: text message, class */
  public openSnackBar(message: string, status: string = 'simple') {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.panelClass = status;
    this.snackBarConfig.duration = 3000;
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBar.open(message, '', this.snackBarConfig);
  }

}

