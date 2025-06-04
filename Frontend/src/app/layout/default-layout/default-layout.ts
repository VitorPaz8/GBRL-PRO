import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';

@Component({
  selector: 'app-default-layout',
  imports: [ RouterOutlet, Header, Footer, NavigationBar],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss'
})
export class DefaultLayout {

}
