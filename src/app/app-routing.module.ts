import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/auth/guards/admin-guard/admin.guard';
import { AuthGuard } from './core/auth/guards/auth-guard/auth.guard';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LayoutAuthenticationComponent } from './core/layouts/components/layout-authentication/layout-authentication.component';
import { LayoutRecipesComponent } from './core/layouts/components/layout-recipes/layout-recipes.component';

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
    canActivate: [AuthGuard],
    component: LayoutAuthenticationComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../app/core/auth/auth.module').then(
            (module) => module.AuthModule
          ),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
