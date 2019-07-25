import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    SharedModule,
    LogInRoutingModule,
    ReactiveFormsModule
  ]
})
export class LogInModule { }
