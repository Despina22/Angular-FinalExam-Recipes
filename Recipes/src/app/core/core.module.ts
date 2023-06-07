import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutRecipesComponent } from './layouts/components/layout-recipes/layout-recipes.component';
import { RouterModule } from '@angular/router';
import { LayoutAuthenticationComponent } from './layouts/components/layout-authentication/layout-authentication.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    LayoutRecipesComponent,
    LayoutAuthenticationComponent,
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  exports: [NavigationComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
