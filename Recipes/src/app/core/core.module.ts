import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutAuthenticationComponent } from './layouts/components/layout-authentication/layout-authentication.component';
import { LayoutRecipesComponent } from './layouts/components/layout-recipes/layout-recipes.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/components/authentication/authentication.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    LayoutRecipesComponent,
    LayoutAuthenticationComponent,
    LoginComponent,
    AuthenticationComponent,
    RegistrationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    SharedModule, //TODO: zaradi pipe, promeni go
  ],
  exports: [NavigationComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
