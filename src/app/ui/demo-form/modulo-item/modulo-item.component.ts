import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from 'src/app/shared/components/inputs/input.directive';
import {
  AbstractControl,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modulo-item',
  templateUrl: './modulo-item.component.html',
  styleUrls: ['./modulo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
})
export class ModuloItemComponent {
  @ViewChild('inp') input?: any;
  @Input() modulo!: { id: number; name: string };
  @Output() onSelectChange = new EventEmitter<number>();

  active = false;

  onClick(event: any) {
    const checked = this.input.nativeElement.checked;

    this.input.nativeElement.checked = !checked;
    this.active = this.input.nativeElement.checked;
    this.onSelectChange.emit(this.modulo.id);
  }
}
