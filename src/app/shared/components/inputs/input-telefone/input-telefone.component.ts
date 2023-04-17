import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from '../input.directive';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-input-telefone',
  templateUrl: './input-telefone.component.html',
  styleUrls: ['./input-telefone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class InputTelefoneComponent extends InputDirective {
  @HostListener('input', ['$event.target'])
  onInput(event: HTMLInputElement) {
    this._control.patchValue(this.formatValue(event.value));
  }

  formatValue(value: string) {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length === 0) return ''

    if (cleanValue.length > 10)
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7, 11)}`

    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 6)}-${cleanValue.slice(6, 10)}`
  }
}
