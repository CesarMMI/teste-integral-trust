import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveContainerComponent {}
