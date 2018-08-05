import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationService } from './registration-service/registration.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationRoutingModule,
    SharedModule
  ],
  providers: [RegistrationService],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
