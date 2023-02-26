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

  stateLogin: boolean = true;

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.email, this.senha).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/estoque']);
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
