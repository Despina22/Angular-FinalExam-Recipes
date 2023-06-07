import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRecipesComponent } from './core/layouts/components/layout-recipes/layout-recipes.component';
import { LayoutAuthenticationComponent } from './core/layouts/components/layout-authentication/layout-authentication.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutRecipesComponent,
    children: [
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
    ],
  },
  { path: 'auth', component: LayoutAuthenticationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
