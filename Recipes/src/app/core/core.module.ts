import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutAuthenticationComponent } from './layouts/components/layout-authentication/layout-authentication.component';
import { LayoutRecipesComponent } from './layouts/components/layout-recipes/layout-recipes.component';
import { MatDialogModule } from '@angular/material/dialog';

const COMPONENTS = [
  NavigationComponent,
  HeaderComponent,
  FooterComponent,
  LayoutRecipesComponent,
  LayoutAuthenticationComponent,
  PageNotFoundComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatToolbarModule, MatDialogModule, RouterModule],
  exports: [NavigationComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
