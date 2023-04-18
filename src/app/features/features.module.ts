import { NgModule } from '@angular/core';

import { BeneficiosComponent } from './beneficios/beneficios.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ModulosComponent } from './modulos/modulos.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ModulosComponent,
    FuncionalidadesComponent,
    BeneficiosComponent,
    PerguntasComponent,
    AgendamentoFormComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    HeroSectionComponent,
    ModulosComponent,
    FuncionalidadesComponent,
    BeneficiosComponent,
    PerguntasComponent,
    AgendamentoFormComponent,
    FooterComponent,
  ],
})
export class FeaturesModule {}
