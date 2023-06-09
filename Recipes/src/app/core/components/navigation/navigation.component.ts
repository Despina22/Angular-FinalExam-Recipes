import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth-service/auth.service';
import { NavigationLink } from '../../models/navigation-link.interface';

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

  constructor(private router: Router, private authService: AuthService) {}

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
        this.authService.logout();
        this.router.navigate(['/']);
    }
  }
}
