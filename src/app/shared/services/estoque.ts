import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {
  constructor(private http: HttpClient) {}

  public getProdutos() {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2NzczNTE0MDcsImV4cCI6MTY3NzM1NTAwN30.UI2zNemCKd1TYyqZqeOomA8i1o27h_tACz7IWkEiXIM`,
      accept: '*/*',
    });

    return this.http.get('http://localhost:5000/usuario/consulta/1', {
      headers,
    });
  }
}
