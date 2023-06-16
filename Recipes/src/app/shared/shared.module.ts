import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchComponent } from './components/search/search.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

const COMPONENTS = [
  SearchComponent,
  StarRatingComponent,
  SnackbarComponent,
  ConfirmDialogComponent,
  LoadingSpinnerComponent,
  FormErrorComponent,
];

@NgModule({
  declarations: [...COMPONENTS, TruncatePipe],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  exports: [...COMPONENTS, TruncatePipe],
})
export class SharedModule {}
