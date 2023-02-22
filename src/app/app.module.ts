import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './config/Routes';
import { EstoqueModule } from './pages/estoque/Estoque.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, EstoqueModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
