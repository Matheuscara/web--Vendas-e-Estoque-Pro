import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, window } from 'rxjs';
import { EstoqueService } from '../../services/estoque';
import { AppState } from '../../state/reducer';

@Component({
  selector: 'app-modal-adicionar-produtos',
  templateUrl: './modal-adicionar-produtos.component.html',
  styleUrls: ['./modal-adicionar-produtos.component.scss'],
})
export class ModalAdicionarProdutosComponent {
  nome: string = '';
  categoria: string = '';
  quantidade: string = '';
  quantidadeMinima: string = '';
  ValorVenda: string = '';
  ValorCompra: string = '';
  produtos$: Observable<any>;

  @Input() showModal: any;
  @Output() fecharModal = new EventEmitter<any>();

  constructor(
    private estoqueService: EstoqueService,
    private store: Store<AppState>
  ) {
    this.produtos$ = store.select('produtos');
  }

  adicionarProduto() {
    this.estoqueService
      .addProduto(
        this.nome,
        this.categoria,
        this.quantidade,
        this.quantidadeMinima,
        this.ValorVenda,
        this.ValorCompra
      )
      .subscribe((data) => {
        this.fecharModal.emit();
        this.store.dispatch({
          type: 'adicionarProduto',
          payload: {
            nome: this.nome,
            categoria: this.categoria,
            quantidade: this.quantidade,
            qtdMinima: this.quantidadeMinima,
            valorCompra: this.ValorCompra,
            valorVenda: this.ValorVenda,
            data_cadastro: new Date(),
          },
        });
      });
  }
}
