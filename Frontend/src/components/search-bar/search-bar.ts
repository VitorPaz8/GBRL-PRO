import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  public onSearch() {
    this.search.emit(this.searchTerm.trim());
  }
}
