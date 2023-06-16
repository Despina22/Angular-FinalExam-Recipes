import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { Recipe } from '../../models/recipe.interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe$?: Observable<Recipe>;

  private recipeId!: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipeId = +this.activeRoute.snapshot.paramMap.get('recipeId')!;
    this.getRecipeDetails();
  }

  private getRecipeDetails(): void {
    this.recipe$ = this.recipesService.getRecipeById(this.recipeId);
  }
}
