import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('../app/features/recipes/recipes.module').then(
        (module) => module.RecipesModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/features/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
