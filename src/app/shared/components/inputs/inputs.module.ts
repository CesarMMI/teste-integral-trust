import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputDataComponent } from './input-data/input-data.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDirective } from './input.directive';
import { InputModuloComponent } from './input-modulo/input-modulo.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    InputTextComponent,
    InputDirective,
    InputMaskComponent,
    InputDataComponent,
    InputModuloComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule
  ],
  exports: [InputTextComponent, InputMaskComponent, InputDataComponent, InputModuloComponent],
})
export class InputsModule {}
