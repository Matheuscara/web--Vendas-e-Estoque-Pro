import { Routes } from '@angular/router';
import { EstoqueComponent } from '../pages/estoque/container/estoque.component';
import { LoginComponent } from '../pages/login/container/login.component';

export const routes: Routes = [
  { path: 'estoque', component: EstoqueComponent },
  { path: 'login', component: LoginComponent },

];
