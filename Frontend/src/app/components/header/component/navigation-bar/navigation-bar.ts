import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})

export class NavigationBar {
  navItems = input([{id:1, label:"default", link:"default"}]);
}