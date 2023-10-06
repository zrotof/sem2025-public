import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgramContainerComponent } from './components/program-container/program-container.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { AmbassadorBannerComponent } from 'src/app/shared/components/ambassador-banner/ambassador-banner.component';


@NgModule({
  declarations: [
    ProgramContainerComponent,
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    SecondaryHeroComponent,
    ProgramListComponent,
    ProgramDetailsComponent,
    AmbassadorBannerComponent
  ]
})
export class ProgramModule { }
