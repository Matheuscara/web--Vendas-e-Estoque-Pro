import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './container/estoque.component';
import { SharedComponentsModule } from 'src/app/shared/components/Shared.components.module';

@NgModule({
  declarations: [EstoqueComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [EstoqueComponent],
})
export class EstoqueModule {}
