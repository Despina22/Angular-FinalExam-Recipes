import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [SearchComponent, StarRatingComponent, TruncatePipe],
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule],
  exports: [SearchComponent, StarRatingComponent, TruncatePipe],
})
export class SharedModule {}
