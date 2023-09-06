import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import {
  debounceTime,
  switchMap,
  take,
  distinctUntilChanged,
  Subject,
  takeUntil,
} from 'rxjs';
import { SearchService } from 'src/app/shared/services/search-service/search.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit, OnDestroy {
  recipes?: Recipe[];
  recipeNotFound: boolean = false;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private recipesService: RecipesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getRecipes();
    this.searchedRecipe();
  }

  private getRecipes(): void {
    this.recipesService
      .getRecipes()
      .pipe(take(1))
      .subscribe((data) => {
        this.recipes = data;
      });
  }

  private searchedRecipe(): void {
    this.searchService.searchValue$
      .asObservable()
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(3500),
        distinctUntilChanged(),
        switchMap((term) => this.searchService.searchRecipe(term))
      )
      .subscribe((data) => {
        if (data.length) {
          this.recipeNotFound = false;
          this.recipes = data;
        } else {
          this.recipeNotFound = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
