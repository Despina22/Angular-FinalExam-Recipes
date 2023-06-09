import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth-service/auth.service';
import { NavigationLink } from '../../models/navigation-link.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { SnackbarMessageService } from 'src/app/shared/services/snackbar-message-service/snackbar-message.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigationLinks: NavigationLink[] = [
    { id: 1, linkName: 'Home', visible: true },
    { id: 2, linkName: 'Admin', visible: false },
    { id: 3, linkName: 'Login', visible: false },
    { id: 4, linkName: 'Logout', visible: false },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbarMessageService: SnackbarMessageService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.linkVisibility();
  }

  linkVisibility() {
    this.authService.isAdmin$.asObservable().subscribe((isAdmin) => {
      const adminLink = this.navigationLinks.find(
        (link) => link.linkName === 'Admin'
      );
      if (adminLink) {
        adminLink.visible = isAdmin;
      }
    });

    this.authService.isLoggedIn$.asObservable().subscribe((isLoggedIn) => {
      const loginLink = this.navigationLinks.find(
        (link) => link.linkName === 'Login'
      );
      const logoutLink = this.navigationLinks.find(
        (link) => link.linkName === 'Logout'
      );
      if (loginLink && logoutLink) {
        loginLink.visible = !isLoggedIn;
        logoutLink.visible = isLoggedIn;
      }
    });
  }

  navigation(navigationLink: NavigationLink) {
    switch (navigationLink.linkName) {
      case 'Home':
        this.router.navigate(['/']);
        break;
      case 'Admin':
        this.router.navigate(['admin']);
        break;
      case 'Login':
        this.router.navigate(['auth/login']);
        break;
      case 'Logout':
        const confirmDialog = this.modal.open(ConfirmDialogComponent, {
          data: { message: 'Are you sure you want to logout?' },
          position: { top: '40px' },
        });

        confirmDialog.afterClosed().subscribe((result) => {
          if (result) {
            this.authService.logout();
            this.snackbarMessageService.showMessage(
              'You are logged out',
              'snack-bar-success-container'
            );
            this.router.navigate(['/']);
          }
        });
    }
  }
}
