import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from 'src/app/shared/components/responsive-container/responsive-container.component';


@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule, ResponsiveContainerComponent],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeComponent {

}
