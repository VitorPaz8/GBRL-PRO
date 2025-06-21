import { Component, Input } from '@angular/core';
import { Header } from "../../../../components/header/header";
import { NavigationBar } from "../../../../components/navigation-bar/navigation-bar";
import { Footer } from "../../../../components/footer/footer";
import { ProductDTO } from '../../../../dtos/productsDTO';
import { CardProduct } from "../../../../components/card-product/card-product";

@Component({
  selector: 'app-product-page',
  imports: [Header, NavigationBar, Footer, CardProduct],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})
export class ProductPage {
  @Input({ required: true }) product!: ProductDTO;
}
