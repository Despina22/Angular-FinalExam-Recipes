import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.scss'],
})
export class RecipeTableComponent implements OnInit {
  displayedColumns: string[] = [
    'rowIndex',
    'name',
    'stars',
    'youtubeLink',
    'dateCreated',
    'edit',
    'delete',
  ];
  dataSource?: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService
      .getRecipes()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource = data));
  }
}
