import { Component } from '@angular/core';
import { ResponsiveContainerComponent } from 'src/app/shared/components/responsive-container/responsive-container.component';

import { BeneficiosComponent } from '../ui/beneficios/beneficios.component';
import { FuncionalidadesComponent } from '../ui/funcionalidades/funcionalidades.component';
import { HeroComponent } from '../ui/hero/hero.component';
import { ModulosComponent } from '../ui/modulos/modulos.component';
import { FaqComponent } from '../ui/faq/faq.component';
import { DemoFormComponent } from '../ui/demo-form/demo-form.component';
import { FooterComponent } from '../ui/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    ResponsiveContainerComponent,
    HeroComponent,
    ModulosComponent,
    FuncionalidadesComponent,
    BeneficiosComponent,
    FaqComponent,
    DemoFormComponent,
    FooterComponent
  ],
})
export class HomeComponent {}
