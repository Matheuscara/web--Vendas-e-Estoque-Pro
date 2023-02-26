import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {
  constructor(private http: HttpClient) {}

  public getProdutos() {
    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      accept: '*/*',
    });

    return this.http.get('http://localhost:5000/usuario/consulta/produtos', {
      headers,
    });
  }
}
