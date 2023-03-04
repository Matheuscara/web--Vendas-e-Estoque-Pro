import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  nome: string = '';
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;

  stateLogin: boolean = true;

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.email, this.senha).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/estoque']);
    },(error: HttpErrorResponse) => {
      if(error.error.message === 'Email nao encontrado') {
        this.invalidEmail = true
        this.invalidPassword = false

      } else {
        this.invalidEmail = true
        this.invalidPassword = true
      }
    });
  }

  cadastrar() {
    this.loginService
      .cadastrar(this.nome, this.email, this.senha)
      .subscribe((data: any) => {
        this.stateLogin = true;
        this.nome = '';
      });
  }

  stepCadatrar() {
    this.stateLogin = false;
    this.email = '';
    this.senha = '';
    this.nome = '';
  }

  stepLogin() {
    this.stateLogin = true;
    this.email = '';
    this.senha = '';
    this.nome = '';
  }
}
