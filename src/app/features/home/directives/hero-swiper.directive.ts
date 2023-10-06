import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeroSwiper]',
  standalone : true
})
export class HeroSwiperDirective implements AfterViewInit{

  private readonly swiperElement : HTMLElement;

  @Input('config') config?: any;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    const swiper =  Object.assign(this.swiperElement, this.config);
    
    // @ts-ignore
    this.swiperElement.initialize();
  }

}

