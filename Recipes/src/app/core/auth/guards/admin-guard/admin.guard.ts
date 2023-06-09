import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (this.authService.isUserAdmin()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
