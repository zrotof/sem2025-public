import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavSmallScreenComponent } from './components/nav-small-screen/nav-small-screen.component';
import { PrimeNgComponentsModule } from '../shared/modules/prime-ng-components/prime-ng-components.module';
import { ConvertStringLabelToFontawesomeIconPipe } from '../shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreRoutingModule,
    PrimeNgComponentsModule,
    ConvertStringLabelToFontawesomeIconPipe,
    HeaderComponent,
    NavSmallScreenComponent
  ],
  exports : [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
