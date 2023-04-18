import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InputDirective } from '../input.directive';
import { Subscription, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./../inputs.common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMaskComponent extends InputDirective {
  @Input() mask!: string;
  get maskLength() {
    return this.mask.replace(/\D/g, '').length;
  }
  get rawValue() {
    return (this.control.value || '').replace(/\D/g, '');
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    let valor = this.rawValue;
    this._control.setValue(this.aplicarMascara(valor));
  }

  @HostListener('focusout', ['$event'])
  onBlur(event: any) {
    if (this.rawValue.length === this.maskLength) return;

    this.control.setErrors({ ...this.control.errors, incorrect: true });
  }

  aplicarMascara(valor: string): string {
    valor = valor.replace(/\D/g, '');
    let pad = this.mask.replace(/\D/g, '').replace(/9/g, '_');
    let valorMask = valor + pad.substring(0, pad.length - valor.length);
    let valorMaskPos = 0;

    valor = '';
    for (let i = 0; i < this.mask.length; i++) {
      if (isNaN(parseInt(this.mask.charAt(i)))) {
        valor += this.mask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    return valor;
  }
}
