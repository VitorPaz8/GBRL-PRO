import { Component, input } from '@angular/core';

export interface NavItemDTO {
  id: number;
  label: string;
  link: string;
}

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})

export class NavigationBar {
  navItems = input([{id:1, label:"default", link:"default"}]);
}
