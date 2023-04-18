import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  EMPTY,
  first,
  map,
  Observable,
  of,
  retry,
  tap,
} from 'rxjs';

import { IFormData } from '../models/form-data';

// O PDF de instruções, no 4º item, solicitava-se para realizar uma requisição GET no formulário,
// porém para enviar dados usa-se o POST. Na dúvida, eu fiz as duas requisições, uma com o verbo GET
// para recuperar dados e preenchê-los no formulário, e outra com o verbo POST, simulando o envio de
// dados para uma API.
@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  // "Foi usado o método 'of()' para simular uma resposta do servidor. Porém,
  // pode-se substituí-lo pelo 'HttpClient'.
  constructor(private http: HttpClient) {}

  // Aqui pode ser feito qualquer tratamento de erro, como, por exemplo,
  // um toast com a mensagem  de erro ou um redirecionamento
  // de página, dependendo do código do erro.
  private handleError(err: Error) {
    return of({
      error: true,
      message: err.message.toString(),
    });
  }

  // Para simular um erro do servidor, 10% das requisições criam um erro artificial
  private randomError() {
    if (Math.random() < 0.9) throw new Error('Erro artificial');
  }

  get(): Observable<IFormData> {
    return of({
      nome: 'Cesar',
      email: 'cesar@teste.com',
      telefone: '11 91234-1234',
      datahora: new Date(),
      modulos: [1, 3],
    }).pipe(
      // Com o 'first()', após a primeira resposta, a inscrição do observable é cancelada.
      first(),
      tap(() => this.randomError()),
      catchError((err) => EMPTY)
    );
  }

  // De acordo com as instruções, era para fazer uma operação GET, porém, fiz também um
  // método para POST, seguindo as boas práticas.
  post(value: IFormData) {
    return of({
      message: 'Demonstração marcada com sucesso!',
    }).pipe(
      first(),
      // Foi usado o 'delay()' para simular um tempo de espera.
      delay(2000),
      tap(() => this.randomError()),
      map((data) => {
        return {
          ...data,
          error: false,
        };
      }),
      // O 'retry()' foi usado para, caso haja um erro ele tentará mais 3 vezes
      retry(3),
      catchError((err) => this.handleError(err))
    );
  }
}
