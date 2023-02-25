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

  constructor(private store: Store<AppState>, private estoqueService: EstoqueService) {
    this.produtos$ = store.select('produtos');

    this.produtos$.subscribe((args) => {
      this.produtos = args.produtos
    })
  }

  ngOnInit(): void {
    this.estoqueService.getProdutos().subscribe(data => {
      this.store.dispatch({ type: 'estoqueProdutos', payload: data })
    })
  }

  increment() {
    console.log(this.store)
  }

  decrement() {
    this.store.dispatch({ type: 'DECREMENT' });
  }
}
