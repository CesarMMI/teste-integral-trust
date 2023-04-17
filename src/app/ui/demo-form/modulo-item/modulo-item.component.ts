import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modulo-item.component.html',
  styleUrls: ['./modulo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuloItemComponent {

}
