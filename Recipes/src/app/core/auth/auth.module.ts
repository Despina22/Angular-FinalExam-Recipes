import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MaterialAuthModule } from './material-imports/material-auth.module';

const COMPONENTS = [
  LoginComponent,
  AuthenticationComponent,
  RegistrationComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialAuthModule,
  ],
})
export class AuthModule {}
