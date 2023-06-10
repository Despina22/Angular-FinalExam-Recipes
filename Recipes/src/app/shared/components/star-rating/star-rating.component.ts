import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() rating!: number;

  constructor() {}

  get stars(): boolean[] {
    const filledStarsCount = Math.floor(this.rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(i < filledStarsCount);
    }

    return stars;
  }
}
