import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductDTO } from '../../dtos/productsDTO';

@Injectable({
  providedIn: 'root' // o Angular injeta automaticamente esse service na app inteira
})
export class ProductService {
  private apiUrl = 'https://api.exemplo.com/produtos';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${this.apiUrl}/${id}`);
  }

  // outros métodos: criar, editar, deletar...
}
