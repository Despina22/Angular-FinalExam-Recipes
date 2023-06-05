import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchValue$: Subject<string> = new Subject<string>();
  private readonly recipeUrl = `${environment.baseApiUrl}recipes`;

  constructor(private http: HttpClient) {}

  searchRecipe(searchTerm: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipeUrl}?name_like=${searchTerm}`);
  }
}
