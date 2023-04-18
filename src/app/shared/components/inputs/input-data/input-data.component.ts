import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputDirective } from '../input.directive';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./../inputs.common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDataComponent extends InputDirective {}
