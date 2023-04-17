import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputDataComponent } from 'src/app/shared/components/inputs/input-data/input-data.component';
import { InputHoraComponent } from 'src/app/shared/components/inputs/input-hora/input-hora.component';
import { InputTelefoneComponent } from 'src/app/shared/components/inputs/input-telefone/input-telefone.component';
import { InputTextComponent } from 'src/app/shared/components/inputs/input-text/input-text.component';
import { ModuloItemComponent } from './modulo-item/modulo-item.component';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    InputTextComponent,
    InputTelefoneComponent,
    InputDataComponent,
    InputHoraComponent,
    ModuloItemComponent,
  ],
})
export class DemoFormComponent {
  modulos = [
    { id: 1, name: 'RO integral' },
    { id: 2, name: 'RL integral' },
    { id: 3, name: 'RM integral' },
  ];

  form = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: [''],
    data: ['', Validators.required],
    hora: [''],
    modulos: [[1, 2, 3]],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }
}
