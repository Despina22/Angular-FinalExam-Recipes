import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  @Output() registration: EventEmitter<User> = new EventEmitter<User>();

  formProgress: number = 0;
  hide = true;
  durationInSeconds = 5;

  private readonly nameValidators = [
    Validators.required,
    Validators.pattern('^[A-Z][a-z]{2,50}$'),
  ];
  private readonly requiredValidators = [Validators.required];

  registrationForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl('', this.nameValidators),
      lastName: new FormControl('', this.nameValidators),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', this.requiredValidators),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w[a-zA-Z0-9.!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?]*$/),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w[a-zA-Z0-9.!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?]*$/),
      ]),
      gender: new FormControl('', this.requiredValidators),
    },
    { validators: this.checkPasswords }
  );

  constructor() {}

  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe(() => {
      this.updateFormProgress();
    });
  }

  checkPasswords(registerForm: AbstractControl) {
    const password = registerForm.get('password')?.value;
    const confirmPassword = registerForm.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  updateFormProgress(): void {
    const formControls = this.registrationForm.controls;
    const totalControls = Object.keys(formControls).length;

    const filledControls = Object.values(formControls).reduce(
      (count, control) => count + (control.valid ? 1 : 0),
      0
    );

    this.formProgress = (filledControls / totalControls) * 100;
  }

  onRegister() {
    if (!this.registrationForm.valid) return;
    this.registration.emit(this.registrationForm.value);
  }
}
