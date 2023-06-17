import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() login: EventEmitter<User> = new EventEmitter<User>();

  hide: boolean = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w[a-zA-Z0-9.!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?]*$/),
    ]),
  });

  onLogin(): void {
    this.login.emit(this.loginForm.value);
  }
}
