import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class ModulosComponent {
  cards = [
    {
      icon: 'paid',
      title: 'RO integral',
      description:
        'Desenvolvido para controlar, registrar, avaliar, monitorar e mitigar riscos operacionais, atendendo às exigências da Resolução 3.380 do Banco Central.',
      route: ['ro-integral'],
    },
    {
      icon: 'stars',
      title: 'RL integral',
      description:
        'Incorpora grandes avanços ao processo de gestão da liquidez das instituições financeiras. Desenvolvido a partir da necessidade de controles estabelecidos pela Resolução 4.090 do Bacen.',
      route: ['rl-integral'],
    },
    {
      icon: 'build_circle',
      title: 'RM integral',
      description:
        'Ferramenta para avaliação do risco de mercado das carteiras, medindo, simulando, monitorando e controlando essa exposição.',
      route: ['rm-integral'],
    },
  ];
}
