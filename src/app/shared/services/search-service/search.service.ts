import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchValue$: Subject<string> = new Subject<string>();

  private readonly recipeUrl: string = `${environment.baseApiUrl}recipes`;

  constructor(private http: HttpClient) {}

  searchRecipe(searchTerm: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipeUrl}?name_like=${searchTerm}`);
  }
}
