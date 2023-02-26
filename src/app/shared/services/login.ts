import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(email: string, senha: string) {
    return this.http.post('http://localhost:5000/usuario/login', {
      email: email,
      senha: senha,
    });
  }

  public cadastrar(nome: string, email: string, senha: string) {
    return this.http.post('http://localhost:5000/usuario/cria', {
      nome: nome,
      email: email,
      permissao: 'usuario',
      senha: senha,
      data_cadastro: new Date(),
    });
  }
}
