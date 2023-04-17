import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from 'src/app/shared/components/responsive-container/responsive-container.component';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule,ResponsiveContainerComponent],
})
export class BeneficiosComponent {

}
