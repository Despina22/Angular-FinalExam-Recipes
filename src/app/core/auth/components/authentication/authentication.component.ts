import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { SnackbarMessageService } from 'src/app/shared/services/snackbar-message-service/snackbar-message.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { Role } from 'src/app/core/models/role.enum';

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

  onLogin(formData: User): void {
    this.isLoading = true;
    this.authService
      .userLogin(formData)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.snackbarMessageService.showMessage(
            'You are successfully logged in!',
            'snack-bar-success-container'
          );
          if (data.user.role === Role.ADMIN) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (errorMessage) => {
          this.snackbarMessageService.showMessage(
            errorMessage,
            'snack-bar-error-container'
          );
          this.isLoading = false;
        },
      });
  }

  onRegister(formData: User): void {
    const user = {
      ...formData,
      role: 'moderator',
      createdAt: new Date().toISOString(),
    };

    this.isLoading = true;
    this.authService
      .userRegistration(user)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.snackbarMessageService.showMessage(
            'You are successfully registered',
            'snack-bar-success-container'
          );
          this.isLoginForm = true;
          this.isLoading = false;
        },
        error: (errorMessage) => {
          this.snackbarMessageService.showMessage(
            errorMessage,
            'snack-bar-error-container'
          );
          this.isLoading = false;
        },
      });
  }
}
