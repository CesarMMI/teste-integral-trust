import { AbstractControl, ValidatorFn } from '@angular/forms';

export function modulosLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value && value.filter((v: boolean) => v).length < length) {
      return { modulosLength: true };
    }
    return null;
  };
}

export function telefoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const telefonePattern = /^\d{2}\s\d{4,5}-\d{4}$/;
    if (control.value && !telefonePattern.test(control.value)) {
      return { telefone: true };
    }
    return null;
  };
}

export function horaValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hora = control.value;

    if (!hora) return { hora: true };

    if (hora.length !== 5 || hora[2] !== ':') return { hora: true };

    const [horas, minutos] = hora
      .split(':')
      .map((parte: string) => parseInt(parte, 10));

    if (
      isNaN(horas) ||
      isNaN(minutos) ||
      horas < 0 ||
      horas > 23 ||
      minutos < 0 ||
      minutos > 59
    )
      return { hora: true };

    return null;
  };
}
