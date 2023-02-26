import { Routes } from '@angular/router';
import { EstoqueComponent } from '../pages/estoque/container/estoque.component';
import { LoginComponent } from '../pages/login/container/login.component';
import { VendasComponent } from '../pages/vendas/container/vendas.component';

export const routes: Routes = [
  { path: 'estoque', component: EstoqueComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'login', component: LoginComponent },

];
