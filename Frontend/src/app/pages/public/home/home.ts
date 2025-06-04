import { Component } from '@angular/core';
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar';
import { Products } from "../../../components/products/products";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, NavigationBar, Products],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
