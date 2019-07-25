import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    SharedModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SignUpModule { }
