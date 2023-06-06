import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: '', component: RecipeTableComponent },
  { path: 'recipe/:recipeId/edit', component: EditRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
