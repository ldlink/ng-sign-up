import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyupBlurFocusDirective } from './directives/keyup-blur-focus.directive';

@NgModule({
  declarations: [KeyupBlurFocusDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    KeyupBlurFocusDirective
  ],
})
export class SharedModule { }
