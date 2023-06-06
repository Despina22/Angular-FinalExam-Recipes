import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarMessageService {
  private snackbarMessageSubject$ = new Subject<string | null>();

  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, stateClass: string): void {
    const snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: message },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [stateClass],
      duration: 3000,
    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.snackbarMessageSubject$.next(null);
    });

    this.snackbarMessageSubject$.next(message);
  }
}
