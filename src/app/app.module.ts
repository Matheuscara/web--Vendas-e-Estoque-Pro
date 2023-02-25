import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './config/Routes';
import { EstoqueModule } from './pages/estoque/Estoque.module';
import { StoreModule } from '@ngrx/store';
import { produtosReducer } from './shared/state/reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      produtos: produtosReducer
    }),
  ],
  exports: [RouterModule, EstoqueModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
