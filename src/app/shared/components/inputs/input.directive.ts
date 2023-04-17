import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { IInputValidation } from './input-validation';

@Directive({ standalone: true })
export abstract class InputDirective implements OnInit {
  @Input() label: string = '';

  @Input() validations: IInputValidation[] = [];

  @Input() control!: AbstractControl;
  get _control() {
    return this.control as FormControl;
  }

  protected inputId: string = '';

  constructor() {}

  ngOnInit(): void {
    const randomHex = Math.floor(Math.random() * 0xffffffffffff)
      .toString(16)
      .padStart(12, '0');

    this.inputId = `${this.label}-${randomHex}`;
  }

  getErrorMessage() {
    for (const validation of this.validations) {
      if (this._control.hasError(validation.validationType))
        return validation.message;
    }
    return;
  }
}
