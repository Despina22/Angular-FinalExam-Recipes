import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating!: number;

  get stars(): boolean[] {
    const filledStarsCount = Math.floor(this.rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(i < filledStarsCount);
    }

    return stars;
  }

  constructor() {}

  ngOnInit(): void {}
}
