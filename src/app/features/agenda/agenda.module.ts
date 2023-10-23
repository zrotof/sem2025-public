import { NgModule } from '@angular/core';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaContainerComponent } from './components/agenda-container/agenda-container.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';


@NgModule({
  imports: [
    AgendaRoutingModule,
    SecondaryHeroComponent,
    AgendaContainerComponent
  ]
})

export class AgendaModule { }
