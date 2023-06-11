import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SearchComponent } from './components/search/search.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CheckFormValidityPipe } from './pipes/check-form-validity/check-form-validity.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [
    SearchComponent,
    StarRatingComponent,
    TruncatePipe,
    CheckFormValidityPipe,
    SnackbarComponent,
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  exports: [
    SearchComponent,
    StarRatingComponent,
    TruncatePipe,
    CheckFormValidityPipe,
    LoadingSpinnerComponent,
    FormErrorComponent,
  ],
})
export class SharedModule {}
