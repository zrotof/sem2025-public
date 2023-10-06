import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';

@Component({
  selector: 'app-agenda-container',
  templateUrl: './agenda-container.component.html',
  styleUrls: ['./agenda-container.component.scss']
})
export class AgendaContainerComponent implements OnInit {

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;

  heroBannerId: string = "agenda";

  constructor(
    private heroService : HeroBannerService
  ){}

  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id);
  }
}
