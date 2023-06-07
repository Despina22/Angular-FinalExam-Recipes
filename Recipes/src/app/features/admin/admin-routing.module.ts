import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

const routes: Routes = [
  { path: '', component: RecipeTableComponent },
  { path: 'recipe/:recipeId/edit', component: RecipeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
