import { NavigationItem } from './navigation-bar.type';
import { Component, Input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [Button],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})

export class NavigationBar {
  @Input() parameters!: NavigationItem[];
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
}