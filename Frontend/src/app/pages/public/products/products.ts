import { Component } from '@angular/core';
import { CardProduct } from '../../../../components/card-product/card-product';
import { ProductService } from '../../../../services/product/productService';
import { ProductDTO } from '../../../../dtos/productsDTO'
import { Header } from "../../../../components/header/header";
import { Footer } from "../../../../components/footer/footer";
import { NavigationBar } from "../../../../components/navigation-bar/navigation-bar";

@Component({
  selector: 'app-products',
  imports: [CardProduct, Header, Footer, NavigationBar],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})

export class Products {
  products: ProductDTO[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.listarProdutos().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Erro ao buscar produtos:', err)
    });
  }
}
