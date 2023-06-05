import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';

const routes: Routes = [{ path: 'recipes', component: RecipeTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
