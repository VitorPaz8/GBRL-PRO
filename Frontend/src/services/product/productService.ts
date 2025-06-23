import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductDTO } from '../../dtos/productsDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.exemplo.com/produtos';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.apiUrl);
  }
  listarProdutosMock(): Observable<ProductDTO[]> {
    return of([
      {
        id: 1,
        image: ['https://example.com/images/produto1.jpg'],
        name: 'Placa Controladora GRBL 3 Eixos',
        price: '199,90',
        description: 'Placa CNC com suporte para 3 eixos e compatível com GRBL. Ideal para máquinas de pequeno porte.',
        quantityAvailable: '25'
      },
      {
        id: 2,
        image: 'https://example.com/images/produto2.jpg',
        name: 'Fonte 24V 15A Chaveada',
        price: '120.00',
        description: 'Fonte de alimentação robusta para sistemas CNC e impressoras 3D. Alta eficiência e segurança.',
        quantityAvailable: '12'
      },
      {
        id: 3,
        image: ['https://example.com/images/produto3a.jpg', 'https://example.com/images/produto3b.jpg'],
        name: 'Driver TB6600 4A',
        price: '75.50',
        description: 'Driver para motor de passo de alto desempenho. Compatível com Arduino e outros sistemas.',
        quantityAvailable: '50'
      },
      {
        id: 4,
        image: 'https://example.com/images/produto4.jpg',
        name: 'Kit CNC Completo (Motor + Placa + Fonte)',
        price: '899.99',
        description: 'Kit completo para montar sua própria CNC caseira com motor de passo, fonte e placa controladora.',
        quantityAvailable: '5'
      }
    ]);
  }
  
  buscarPorId(id: number): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${this.apiUrl}/${id}`);
  }
  buscarPorIdMock(): Observable<ProductDTO> {
    return of({
        id: 1,
        image: ['https://example.com/images/produto1.jpg'],
        name: 'Placa Controladora GRBL 3 Eixos',
        price: '199.90',
        description: 'Placa CNC com suporte para 3 eixos e compatível com GRBL. Ideal para máquinas de pequeno porte.',
        quantityAvailable: '25'
      });
  }

  // outros métodos: criar, editar, deletar...
}
