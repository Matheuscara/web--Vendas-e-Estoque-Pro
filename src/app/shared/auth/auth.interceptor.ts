import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    // private authService: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        console.log(next)
        if (event instanceof HttpResponse) {
          // Verifica se a resposta HTTP tem status 401
          if (event.status === 401) {
            // Coloque aqui a sua lógica de tratamento para respostas 401
            console.log('A resposta HTTP retornou 401!');
          }
        } else if (event instanceof HttpErrorResponse) {
          // Coloque aqui a sua lógica de tratamento para erros HTTP
          console.log('Ocorreu um erro na solicitação HTTP:', event.error);
        }
      })
    );
  }
}