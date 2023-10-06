import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmbassadorBanner } from 'src/app/shared/models/ambassador-banner';
import { CampainTeam } from 'src/app/shared/models/campain-team';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { CandidateService } from 'src/app/shared/services/candidate/candidate.service';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';

@Component({
  selector: 'app-candidate-container',
  templateUrl: './candidate-container.component.html',
  styleUrls: ['./candidate-container.component.scss']
})
export class CandidateContainerComponent implements OnInit {

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  
  ambassadorBanner !: AmbassadorBanner;

  campainTeam$ !: Observable<CampainTeam[]>; 

  heroBannerId: string = "candidat";

  constructor(
    private candidateService : CandidateService,
    private heroService : HeroBannerService
    ){}

  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.initAmbassadorBanner();
    this.getCampainTeam();
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id);
  }

  initAmbassadorBanner() : void {
    this.ambassadorBanner = {
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit ipsum ex at doloremque saepe soluta repellat rerum nisi incidunt quo.",
      image : "../../../../assets/img/campain-ambassador/crowd.jpeg",
      alt : ''
    }
  }

  getCampainTeam() : void{
    this.campainTeam$ = this.candidateService.getCampainTeam();
  }
}
