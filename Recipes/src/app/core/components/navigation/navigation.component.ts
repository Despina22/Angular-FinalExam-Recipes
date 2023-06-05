import { Component, OnInit } from '@angular/core';
import { NavigationLink } from '../../models/navigation-link.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigationLinks: NavigationLink[] = [
    { id: 1, linkName: 'Home' },
    { id: 2, linkName: 'Admin' },
    { id: 3, linkName: 'Login' },
    { id: 4, linkName: 'Logout' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigation(navigationLink: NavigationLink) {
    if (navigationLink.linkName === 'Home') {
      this.router.navigate(['/']);
    } else if (navigationLink.linkName === 'Admin') {
      this.router.navigate(['admin/recipes']);
    }
  }
}
