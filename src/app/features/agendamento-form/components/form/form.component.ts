import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';
import { IFormData } from 'src/app/shared/models/form-data';
import {
  horaValidator,
  modulosLengthValidator,
  telefoneValidator,
} from 'src/app/shared/utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IFormData>();

  @Input() value: {
    loading: boolean;
    agendamento: IFormData | null;
  } | null = null;
  protected form!: FormGroup;

  protected modulos = ['RO Integral', 'RL Integral', 'RM Integral'];
  get formModulos() {
    return (this.form.get('modulos') as FormArray).controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Formulário
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required, telefoneValidator()]],
      data: [null, Validators.required],
      hora: [null, [Validators.required, horaValidator()]],
      modulos: this.formBuilder.array(
        this.buildModulos(),
        modulosLengthValidator(1)
      ),
    });
    // Patch Value caso receba dados
    if (this.value?.agendamento) this.patchData(this.value.agendamento);
  }

  private patchData(value: IFormData) {
    const hours = value.datahora.getHours().toString().padStart(2, '0');
    const minutes = value.datahora.getMinutes().toString().padStart(2, '0');

    this.form.patchValue({
      nome: value.nome,
      email: value.email,
      telefone: value.telefone,
      data: value.datahora,
      hora: `${hours}:${minutes}`,
    });
    this.formModulos.forEach((control, index) =>
      control.patchValue(value.modulos.includes(++index))
    );
  }

  private buildModulos(modulos?: boolean[]) {
    return this.modulos.map(() => this.formBuilder.control(false));
  }

  // Foi feita também uma função para retornar os nomes dos
  // módulos, podendo ser mais útil para o backend.
  private getModulosNome() {
    return (this.form.value.modulos as boolean[])
      .map((v, i) => (v ? this.modulos[i] : null))
      .filter((v) => v !== null);
  }

  private getModulosIndex() {
    return (this.form.value.modulos as boolean[])
      .map((v, i) => (v ? ++i : null))
      .filter((v) => v !== null);
  }

  private getDataHora() {
    const data: Date = this.form.value.data;
    const hora = this.form.value.hora.split(':')[0];
    const minuto = this.form.value.hora.split(':')[1];
    data.setHours(hora, minuto);
    return data;
  }

  protected submit() {
    let submitValue: IFormData = {
      ...this.form.value,
      datahora: this.getDataHora(),
      modulos: this.getModulosIndex(),
    };
    this.onSubmit.emit(submitValue);
  }
}
