import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLateralComponent } from './tab-lateral/tab-lateral.component';
import { ModalAdicionarProdutosComponent } from './modal-adicionar-produtos/modal-adicionar-produtos.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { EstoqueService } from '../services/estoque';

@NgModule({
  declarations: [TabLateralComponent, ModalAdicionarProdutosComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  providers: [EstoqueService],
  exports: [TabLateralComponent, ModalAdicionarProdutosComponent, InputComponent],
})
export class SharedComponentsModule {}
