import { Component, input, signal } from '@angular/core';
import { Button } from '../button/button';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-header',
  imports: [Button, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  buttonName = input('Default')
}
