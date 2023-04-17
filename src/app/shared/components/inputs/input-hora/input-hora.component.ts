import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputDirective } from '../input.directive';

@Component({
  selector: 'app-input-hora',
  templateUrl: './input-hora.component.html',
  styleUrls: ['./input-hora.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class InputHoraComponent extends InputDirective {
  @HostListener('input', ['$event.target'])
  onInput(event: HTMLInputElement) {
    this._control.patchValue(this.formatValue(event.value));
  }

  formatValue(value: string) {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length === 0) return ''

    return `${cleanValue.slice(0, 2)}:${cleanValue.slice(2, 4)}`;
  }
}
