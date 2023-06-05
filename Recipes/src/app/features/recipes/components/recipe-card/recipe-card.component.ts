import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { debounceTime, switchMap, take, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/shared/components/services/search-service/search.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  recipes?: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getRecipes();
    this.searchedRecipe();
  }

  getRecipes() {
    this.recipesService
      .getRecipes()
      .pipe(take(1))
      .subscribe((data) => {
        this.recipes = data;
      });
  }

  searchedRecipe() {
    this.searchService.searchValue$
      .asObservable()
      .pipe(
        debounceTime(3500),
        distinctUntilChanged(),
        switchMap((term) => this.searchService.searchRecipe(term))
      )
      .subscribe((data) => {
        this.recipes = data;
      });
  }
}
