import { Component } from '@angular/core';
import { Button } from '../button/button';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Button, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  onSearch(searchTerm: string) {
    // Lógica para lidar com a busca
    console.log('Termo pesquisado:', searchTerm);
  }
}
