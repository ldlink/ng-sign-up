import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appKeyupBlurFocus]'
})
export class KeyupBlurFocusDirective  {

  @Input() set valueInput(value: any) {
    this.active = value && value.length > 0;
  }

  @HostBinding('class.active') active = false;

}

