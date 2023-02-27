import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EstoqueService } from 'src/app/shared/services/estoque';
import { AppState } from 'src/app/shared/state/reducer';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
})
export class EstoqueComponent implements OnInit {
  produtos$: Observable<any>;
  produtos: any;
  modal = false;

  constructor(
    private store: Store<AppState>,
    private estoqueService: EstoqueService,
    private datePipe: DatePipe
  ) {
    this.produtos$ = store.select('produtos');

    this.produtos$.subscribe((args) => {
      this.produtos = args.produtos;
    });
  }

  ngOnInit(): void {
    this.estoqueService.getProdutos().subscribe((data) => {
      this.store.dispatch({ type: 'estoqueProdutos', payload: data });
    });
  }

  formaterDate(date: string) {
    return this.datePipe
      .transform(date, 'dd/MM/yyyy HH:mm:ss')
      ?.replace(' ', ' - ');
  }

  comportamentoModal() {
    this.modal = this.modal ? false : true
    console.log(this.modal)
  }
}
