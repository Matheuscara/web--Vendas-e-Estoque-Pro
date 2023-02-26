import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './container/vendas.component';
import { SharedComponentsModule } from 'src/app/shared/components/Shared.components.module';

@NgModule({
  declarations: [VendasComponent],
  imports: [CommonModule, SharedComponentsModule],
  providers: [],
  exports: [VendasComponent],
})
export class VendasModule {}
