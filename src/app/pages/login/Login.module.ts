import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared/components/Shared.components.module';
import { LoginComponent } from './container/login.component';
import { LoginService } from 'src/app/shared/services/login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedComponentsModule, FormsModule],
  providers: [LoginService],
  exports: [LoginComponent],
})
export class LoginModule {}
