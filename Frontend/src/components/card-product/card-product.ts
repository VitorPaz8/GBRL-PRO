import { Component, Input } from '@angular/core';
import { ProductDTO } from '../../dtos/productsDTO'

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.scss'
})

export class CardProduct{
  @Input() product!: ProductDTO;
}
