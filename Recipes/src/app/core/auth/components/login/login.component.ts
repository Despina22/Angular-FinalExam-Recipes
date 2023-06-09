import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() login: EventEmitter<User> = new EventEmitter<User>();
  hide = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w[a-zA-Z0-9.!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?]*$/),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value);
    }
  }
}
