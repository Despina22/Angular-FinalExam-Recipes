import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Recipe } from '../../recipes/models/recipe.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  updateData: Subject<void> = new Subject<void>();
  private readonly recipeUrl = `${environment.baseApiUrl}recipes`;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }

  deleteRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.recipeUrl}/${recipe.id}`);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.recipeUrl}/${recipe.id}`, recipe);
  }

  updateRecipeData(): void {
    this.updateData.next();
  }
}
