import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaContainerComponent } from './components/agenda-container/agenda-container.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';


@NgModule({
  declarations: [
    AgendaContainerComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SecondaryHeroComponent
  ]
})
export class AgendaModule { }
