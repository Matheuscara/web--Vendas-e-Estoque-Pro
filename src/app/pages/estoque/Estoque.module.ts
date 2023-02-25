import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './container/estoque.component';
import { SharedComponentsModule } from 'src/app/shared/components/Shared.components.module';
import { EstoqueService } from 'src/app/shared/services/estoque';

@NgModule({
  declarations: [EstoqueComponent],
  imports: [CommonModule, SharedComponentsModule],
  providers: [EstoqueService],
  exports: [EstoqueComponent],
})
export class EstoqueModule {}
