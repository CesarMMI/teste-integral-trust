import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { IInputValidation } from '../../models/input-validation';

@Directive({
  selector: '[appInput]',
})
export class InputDirective implements OnInit {
  @Input() label: string = '';
  @Input() control!: AbstractControl;
  @Input() validations: IInputValidation[] = [];
  protected get _control() {
    return this.control as FormControl;
  }

  protected inputId: string = '';

  ngOnInit(): void {
    const randomHex = Math.floor(Math.random() * 0xffffffffffff)
      .toString(16)
      .padStart(12, '0');

    this.inputId = `${this.label}-${randomHex}`;
  }

  getErrorMessage() {
    for (const validation of this.validations) {
      if (this.control.hasError(validation.validationType))
        return validation.message;
    }
    return;
  }
}
