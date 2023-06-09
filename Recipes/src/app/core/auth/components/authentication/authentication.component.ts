import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { SnackbarMessageService } from 'src/app/shared/services/snackbar-message-service/snackbar-message.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  isLoginForm: boolean = true;
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private snackbarMessageService: SnackbarMessageService,
    private router: Router
  ) {}

  toggleForm(): void {
    this.isLoginForm = !this.isLoginForm;
  }

  onLogin(formData: User) {
    this.isLoading = true;
    this.authService
      .userLogin(formData)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.snackbarMessageService.showMessage(
            'You are successfully logged in!',
            'snack-bar-success-container'
          );
          if (data.user.role === 'admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['/']);
          }
        },
        (errorMessage) => {
          this.snackbarMessageService.showMessage(
            errorMessage,
            'snack-bar-error-container'
          );
          this.isLoading = false;
        }
      );
  }

  onRegister(formData: User) {
    const { confirmPassword, ...userWithoutConfirmPassword } = formData;
    const user = {
      ...userWithoutConfirmPassword,
      role: 'moderator',
      createdAt: new Date().toISOString(),
    };

    this.isLoading = true;
    this.authService
      .userRegistration(user)
      .pipe(take(1))
      .subscribe(
        () => {
          this.snackbarMessageService.showMessage(
            'You are successfully registered',
            'snack-bar-success-container'
          );
          this.isLoginForm = true;
          this.isLoading = false;
        },
        (errorMessage) => {
          this.snackbarMessageService.showMessage(
            errorMessage,
            'snack-bar-error-container'
          );
          this.isLoading = false;
        }
      );
  }
}
