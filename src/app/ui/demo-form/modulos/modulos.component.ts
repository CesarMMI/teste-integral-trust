import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloItemComponent } from '../modulo-item/modulo-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from 'src/app/shared/components/inputs/input.directive';

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModuloItemComponent],
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulosComponent extends InputDirective {
  modulos = [
    { id: 1, name: 'RO integral' },
    { id: 2, name: 'RL integral' },
    { id: 3, name: 'RM integral' },
  ];

  lista: number[] = [];

  onSelectChange(event: number) {
    const index = this.lista.indexOf(event);
    if (index < 0) this.lista.push(event);
    else this.lista.splice(index, 1);
    this._control.patchValue(this.lista.sort())
    console.log(this._control.value);
  }
}
