import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AmbassadorBannerComponent } from 'src/app/shared/components/ambassador-banner/ambassador-banner.component';

@NgModule({
  declarations: [
    ContactContainerComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SecondaryHeroComponent,
    ContactFormComponent,
    AmbassadorBannerComponent
  ]
})

export class ContactModule { }
