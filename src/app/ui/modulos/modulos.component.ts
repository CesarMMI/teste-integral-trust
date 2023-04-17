import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResponsiveContainerComponent } from 'src/app/shared/components/responsive-container/responsive-container.component';

export interface IModuloCardInfo {
  title: string;
  description: string;
  route: string[];
}

@Component({
  selector: 'app-modulos',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulosComponent {
  cards: IModuloCardInfo[] = [
    {
      title: 'RO integral',
      description:
        'Desenvolvido para controlar, registrar, avaliar, monitorar e mitigar riscos operacionais, atendendo às exigências da Resolução 3.380 do Banco Central.',
      route: ['ro-integral'],
    },
    {
      title: 'RL integral',
      description:
        'Incorpora grandes avanços ao processo de gestão da liquidez das instituições financeiras. Desenvolvido a partir da necessidade de controles estabelecidos pela Resolução 4.090 do Bacen.',
      route: ['rl-integral'],
    },
    {
      title: 'RM integral',
      description:
        'Ferramenta para avaliação do risco de mercado das carteiras, medindo, simulando, monitorando e controlando essa exposição.',
      route: ['rm-integral'],
    },
  ];
}
