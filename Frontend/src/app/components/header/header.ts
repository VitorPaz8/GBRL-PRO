import { Component, input, signal } from '@angular/core';
import { Button } from '../button/button';
import { SearchBar } from '../search-bar/search-bar';
import { NavigationBar } from './component/navigation-bar/navigation-bar';

@Component({
  selector: 'app-header',
  imports: [Button, SearchBar, NavigationBar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  
}
