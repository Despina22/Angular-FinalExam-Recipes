import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './components/search/search.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    StarRatingComponent,
    TruncatePipe,
    FormModalComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [SearchComponent, StarRatingComponent, TruncatePipe],
})
export class SharedModule {}
