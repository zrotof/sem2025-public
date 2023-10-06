import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AmbassadorBanner } from 'src/app/shared/models/ambassador-banner';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent {

  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;

  heroBannerId: string = "contact";

  ambassadorBanner !: AmbassadorBanner;

  constructor(
    private heroService : HeroBannerService
  ){}

  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.initAmbassadorBanner();
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
  
}
