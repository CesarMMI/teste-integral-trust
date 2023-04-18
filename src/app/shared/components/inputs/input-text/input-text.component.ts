import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputDirective } from '../input.directive';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./../inputs.common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends InputDirective {

}
