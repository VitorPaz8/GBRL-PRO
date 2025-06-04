import { Component, input, signal } from '@angular/core';
import { HeaderButton } from '../buttons/header-button/header-button';

@Component({
  selector: 'app-header',
  imports: [HeaderButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  nameButton = input('Botão')
}
