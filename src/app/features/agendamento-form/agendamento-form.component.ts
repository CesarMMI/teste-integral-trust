import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  BehaviorSubject,
  combineLatest,
  map,
  startWith,
  Subscription,
} from 'rxjs';
import { IFormData } from 'src/app/shared/models/form-data';
import { AgendamentoService } from 'src/app/shared/services/agendamento.service';

import { FormComponent } from './components/form/form.component';
import { ResponseDialogComponent } from './components/response-dialog/response-dialog.component';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, FormComponent],
})
export class AgendamentoFormComponent implements OnDestroy {
  private dialogSub?: Subscription;

  // Crio 'Observables' já que o 'combineLatest' não emitirá
  // um valor inicial até que cada 'Observable' emita pelo menos um valor.
  private loading$ = new BehaviorSubject<boolean>(false);
  private agendamento$ = this.agendamentoService.get().pipe(startWith(null));
  protected value$ = combineLatest([this.agendamento$, this.loading$]).pipe(
    map(([agendamento, loading]) => {
      return {
        loading,
        agendamento,
      };
    })
  );

  constructor(
    public dialog: MatDialog,
    private agendamentoService: AgendamentoService
  ) {}

  ngOnDestroy(): void {
    this.dialogSub?.unsubscribe();
  }

  protected onSubmit(value: IFormData) {
    console.log(value);
    this.loading$.next(true);

    this.agendamentoService
      .post(value)
      .pipe()
      .subscribe({
        next: (response) => this.openDialog(response),
        complete: () => this.loading$.next(false),
      });
  }
  protected openDialog(response: { error: boolean; message: string }): void {
    const dialogRef = this.dialog.open(ResponseDialogComponent, {
      width: 'min(80%, 350px)',
      data: { ...response },
    });
  }
}
