import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { InputDirective } from '../input.directive';

@Component({
  selector: 'app-input-modulo',
  templateUrl: './input-modulo.component.html',
  styleUrls: ['./input-modulo.component.scss'],
})
export class InputModuloComponent extends InputDirective {
  @ViewChild('input') input!: HTMLInputElement;

  protected onClick() {
    this.input.checked = !this.input.checked;
    this._control.setValue(this.input.checked);
  }
}
