import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[inputNumber]'
})
export class InputNumberDirective {

  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    
    if(this.navigationKeys.indexOf(e.key) > -1) {
      return;
    }
    
    const num = Number(e.key);
    if(isNaN(num) || num < 1) {
      e.preventDefault();
    }
  }
}
