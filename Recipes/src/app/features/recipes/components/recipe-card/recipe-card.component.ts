import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  recipes?: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipesService
      .getRecipes()
      .pipe(take(1))
      .subscribe((data) => {
        this.recipes = data;
      });
  }
}
