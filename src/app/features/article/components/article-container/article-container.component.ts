import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Article, ArticleCategory } from 'src/app/shared/models/blog';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})

export class ArticleContainerComponent implements OnInit{
  
  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  blogMenuList$ !: Observable<ArticleCategory[]>;
  blogItemList$ !: Observable<Article[]>;
  heroBannerId: string = "actualites";
  activatedMenuId : string | null;

  constructor(
    private heroService : HeroBannerService,
    private blogService : BlogService,
    private router : Router
  ){
    this.activatedMenuId = this.router?.getCurrentNavigation()?.extras?.state?.['id'];
  }

  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.getBlogMenuList();
  }

  getSencondaryHeroBannerData(id : string) : void {
    this.secondaryHeroBannerData$ = this.heroService.getSecondaryHeroData(id);
  }

  getBlogMenuList() : void{
    this.blogMenuList$ = this.blogService.getBlogCategoryList();
  }

  getBlogArticleList($event:string) : void{
    console.log("here guys")

    const id = $event;
    this.blogItemList$ = this.blogService.getBlogArticlesByRubricId(id);
  }

}
