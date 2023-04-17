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
import { ModulosComponent } from './modulos/modulos.component';

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
    ModulosComponent,
  ],
})
export class DemoFormComponent {
  form = this.formBuilder.group({
    nome: ['', { validators: [Validators.required] }],
    email: ['', { validators: [Validators.required, Validators.email] }],
    telefone: '',
    data: [Date.now(), { validators: [Validators.required] }],
    hora: '',
    modulos: [],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if(!this.form.value.data) return;

    const datahora = new Date(this.form.value.data);
    const hora = parseInt(this.form.value.hora?.split(':')[0] ?? "0");
    const minuto = parseInt(this.form.value.hora?.split(':')[1] ?? "0");

    datahora.setHours(hora, minuto);
    const value = {
      nome: this.form.value.nome,
      email: this.form.value.email,
      telefone: this.form.value.telefone,
      datahora,
      modulos: this.form.value.modulos,
    };
    console.log(value)
  }

  onReset() {
    this.form.reset();
  }
}
