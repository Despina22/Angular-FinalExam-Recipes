import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRecipesComponent } from './core/layouts/components/layout-recipes/layout-recipes.component';
import { LayoutAuthenticationComponent } from './core/layouts/components/layout-authentication/layout-authentication.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthenticationComponent } from './core/auth/components/authentication/authentication.component';
import { AdminGuard } from './core/auth/guards/admin-guard/admin.guard';

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
        canLoad: [AdminGuard],
        loadChildren: () =>
          import('../app/features/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    component: LayoutAuthenticationComponent,
    children: [{ path: 'login', component: AuthenticationComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
