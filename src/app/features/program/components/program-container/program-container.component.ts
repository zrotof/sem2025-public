import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmbassadorBanner } from 'src/app/shared/models/ambassador-banner';
import { Program } from 'src/app/shared/models/program';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';

@Component({
  selector: 'app-program-container',
  templateUrl: './program-container.component.html',
  styleUrls: ['./program-container.component.scss']
})
export class ProgramContainerComponent implements OnInit {

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  
  ambassadorBanner !: AmbassadorBanner;

  programs$ !: Observable<Program[]>;

  heroBannerId: string = "program";

  constructor( 
    private programService : ProgramsService,
    private heroService : HeroBannerService
    ){}
  
  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.initAmbassadorBanner();
    this.getPrograms();
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id);
  }

  initAmbassadorBanner() : void {
    this.ambassadorBanner = {
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit ipsum ex at doloremque saepe soluta repellat rerum nisi incidunt quo.",
      image : "../../../../assets/img/home/main-hero/senegal.png",
      alt : ''
    }
  }

  getPrograms() : void {
    this.programs$ = this.programService.getPrograms();
  }
}
