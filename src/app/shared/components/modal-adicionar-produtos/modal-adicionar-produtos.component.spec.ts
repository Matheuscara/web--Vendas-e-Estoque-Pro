import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarProdutosComponent } from './modal-adicionar-produtos.component';

describe('ModalAdicionarProdutosComponent', () => {
  let component: ModalAdicionarProdutosComponent;
  let fixture: ComponentFixture<ModalAdicionarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
