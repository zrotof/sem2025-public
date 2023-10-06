import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
//import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/types/modules';
import { HeroSwiperDirective } from '../../../directives/hero-swiper.directive';
import { Swiper } from "swiper";
import { ButtonPrimaryComponent } from 'src/app/shared/components/button-primary/button-primary.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-swiping-hero-banner',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './swiping-hero-banner.component.html',
  styleUrls: ['./swiping-hero-banner.component.scss'],
  imports : [
    CommonModule,
    ButtonPrimaryComponent,
    HeroSwiperDirective,
    RouterLink
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwipingHeroBannerComponent implements AfterViewInit{
  swiper !: Swiper;
  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;
  
  public config = {
    slidesPerView: 1,
    loop : true,
    pagination : {
      el : '.swiper-pagination',
      clickable : true
    }
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onNavigationEvent( param : number) : void {
    param > 0 ? this.swiper.slideNext() : this.swiper.slidePrev();
  }

}
