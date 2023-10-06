import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { HomePactModalComponent } from '../home-pact-modal/home-pact-modal.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-home-pact',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    HomePactModalComponent
  ],
  templateUrl: './home-pact.component.html',
  styleUrls: ['./home-pact.component.scss'],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None

})
export class HomePactComponent {

  constructor(private dialogService : DialogService){}

  openPactModal(){
    this.dialogService.open(HomePactModalComponent, {
      width: '100%',
      height: '100%',
      baseZIndex: 99999,
      styleClass : "pact-modal-style-class"
    });
  }
}
