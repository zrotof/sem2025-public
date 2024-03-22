import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SwipingHeroBannerComponent } from './components/home-container/swiping-hero-banner/swiping-hero-banner.component';
import { HeroSwiperDirective } from './directives/hero-swiper.directive';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { PrimeNgComponentsModule } from 'src/app/shared/modules/prime-ng-components/prime-ng-components.module';
import { SharedComponentsModule } from 'src/app/shared/modules/shared-components/shared-components.module';
import { CampainCounterEventComponent } from './components/home-container/campain-counter-event/campain-counter-event.component';
import { HomeCampainAbassadorComponent } from './components/home-container/home-campain-abassador/home-campain-abassador.component';
import { AboutCandidateComponent } from './components/home-container/about-candidate/about-candidate.component';
import { FeaturedProgramsComponent } from 'src/app/shared/components/featured-programs/featured-programs.component';
import { HomePactComponent } from './components/home-container/home-pact/home-pact.component';
import { HomeLastNewsComponent } from './components/home-container/home-last-news/home-last-news.component';
import { ProgramBannerComponent } from 'src/app/shared/components/program-banner/program-banner.component';

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroSwiperDirective,
    PrimeNgComponentsModule,
    SharedComponentsModule,
    SwipingHeroBannerComponent,
    CampainCounterEventComponent,
    FeaturedProgramsComponent,
    HomeCampainAbassadorComponent,
    AboutCandidateComponent,
    HomePactComponent,
    HomeLastNewsComponent,
    ProgramBannerComponent
  ]
})
export class HomeModule { }
