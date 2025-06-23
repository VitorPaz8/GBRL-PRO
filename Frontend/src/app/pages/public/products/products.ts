import { Component } from '@angular/core';
import { CardProduct } from '../../../../components/card-product/card-product';
import { ProductService } from '../../../../services/product/productService';
import { ProductDTO } from '../../../../dtos/productsDTO'
import { Header } from "../../../../components/header/header";
import { Footer } from "../../../../components/footer/footer";
import { NavigationBar } from "../../../../components/navigation-bar/navigation-bar";

@Component({
  selector: 'app-products',
  standalone: true ,
  imports: [Header, Footer, NavigationBar, CardProduct],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})

export class Products {
  products: ProductDTO[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.listarProdutosMock().subscribe((data) => {
      this.products = data;
    });
  }
}
