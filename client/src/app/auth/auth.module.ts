import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './servise/auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
