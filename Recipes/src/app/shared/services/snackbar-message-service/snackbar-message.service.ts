import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, take } from 'rxjs';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarMessageService {
  private snackbarMessageSubject$ = new Subject<string | null>();
  private durationInSeconds: number = 4;

  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, stateClass: string): void {
    const snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: message },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [stateClass],
      duration: this.durationInSeconds * 1000,
    });

    snackBarRef
      .afterDismissed()
      .pipe(take(1))
      .subscribe(() => {
        this.snackbarMessageSubject$.next(null);
      });

    this.snackbarMessageSubject$.next(message);
  }
}
