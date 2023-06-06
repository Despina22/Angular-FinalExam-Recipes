import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './components/search/search.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckFormValidityPipe } from './pipes/check-form-validity/check-form-validity.pipe';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    SearchComponent,
    StarRatingComponent,
    FormModalComponent,
    TruncatePipe,
    CheckFormValidityPipe,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    SearchComponent,
    StarRatingComponent,
    TruncatePipe,
    CheckFormValidityPipe,
  ],
})
export class SharedModule {}
