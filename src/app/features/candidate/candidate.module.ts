import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateContainerComponent } from './components/candidate-container/candidate-container.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { AmbassadorBannerComponent } from 'src/app/shared/components/ambassador-banner/ambassador-banner.component';
import { CampainVideoComponent } from 'src/app/features/candidate/components/candidate-container/campain-video/campain-video.component';
import { FeaturedProgramsComponent } from 'src/app/shared/components/featured-programs/featured-programs.component';
import { BiographyComponent } from './components/candidate-container/biography/biography.component';
import { TopAboutComponent } from './components/candidate-container/top-about/top-about.component';
import { CampainTeamComponent } from './components/candidate-container/campain-team/campain-team.component';
import { ProgramBannerComponent } from 'src/app/shared/components/program-banner/program-banner.component';

@NgModule({
  declarations: [
    CandidateContainerComponent,
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SecondaryHeroComponent,
    AmbassadorBannerComponent,
    CampainVideoComponent,
    FeaturedProgramsComponent,
    BiographyComponent,
    TopAboutComponent,
    CampainTeamComponent,
    ProgramBannerComponent
  ]
})

export class CandidateModule { }
