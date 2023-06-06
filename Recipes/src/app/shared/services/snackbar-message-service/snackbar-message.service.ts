import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarMessageService {
  private durationInSeconds: number = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, stateClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message: message },
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [stateClass],
    });
  }
}
