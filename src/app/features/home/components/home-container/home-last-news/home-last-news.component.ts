import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/shared/models/blog';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ArticleItemComponent } from 'src/app/features/article/components/article-container/article-item/article-item.component';
import { NewItemNoDescritpionComponent } from 'src/app/shared/components/new-item-no-descritpion/new-item-no-descritpion.component';

@Component({
  selector: 'app-home-last-news',
  standalone: true,
  imports: [
    CarouselModule,
    NewItemNoDescritpionComponent
  ],
  templateUrl: './home-last-news.component.html',
  styleUrls: ['./home-last-news.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class HomeLastNewsComponent {

  @Input() lastNews !:  Article[];
  @ViewChild('carousel') carousel !: Carousel;

  responsiveOptions  = [
    {
      breakpoint: '1178px',
      numVisible: 3,
      numScroll: 1
    },
    {
        breakpoint: '914px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '415px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  navigateTo(param : number){
    param > 0 ? this.carousel.navForward(1) : this.carousel.navBackward(1) ;
  }
}
