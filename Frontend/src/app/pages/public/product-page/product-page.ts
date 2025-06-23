import { Component, Input } from '@angular/core';
import { Header } from "../../../../components/header/header";
import { NavigationBar } from "../../../../components/navigation-bar/navigation-bar";
import { Footer } from "../../../../components/footer/footer";
import { ProductDTO } from '../../../../dtos/productsDTO';
import { CardProduct } from "../../../../components/card-product/card-product";
import { ProductService } from '../../../../services/product/productService';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [Header, NavigationBar, Footer, CardProduct],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})
export class ProductPage {
  product!: ProductDTO;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.buscarPorIdMock().subscribe((data) => {
      this.product = data;
    });
  }
}
