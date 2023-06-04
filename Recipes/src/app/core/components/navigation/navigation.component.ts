import { Component, OnInit } from '@angular/core';
import { NavigationLink } from '../../models/navigation-link.interface';

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

  constructor() {}

  ngOnInit(): void {}
}
