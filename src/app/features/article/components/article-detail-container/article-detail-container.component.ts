import { Component, OnInit } from '@angular/core';
import { AsyncPipe} from '@angular/common';
import { Observable, of } from 'rxjs';
import { SecondaryHeroBanner } from 'src/app/shared/models/secondar-hero-banner';
import { BlogService } from 'src/app/shared/services/blog/blog.service';
import { HeroBannerService } from 'src/app/shared/services/hero-banner/hero-banner.service';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleDataComponent } from './article-data/article-data.component';
import { Article, ArticleCategory } from 'src/app/shared/models/blog';
import { ArticleDetailSideBlockComponent} from './article-detail-side-block/article-detail-side-block.component';

@Component({
  selector: 'app-article-detail-container',
  standalone: true,
  imports: [
    AsyncPipe,
    SecondaryHeroComponent,
    ArticleDataComponent,
    ArticleDetailSideBlockComponent
  ],
  templateUrl: './article-detail-container.component.html',
  styleUrls: ['./article-detail-container.component.scss']
})
export class ArticleDetailContainerComponent implements OnInit {
  
  secondaryHeroBannerData$ !: Observable<SecondaryHeroBanner>;
  heroBannerId: string = "actualites";
  articleData$ !: Observable<Article>;
  lastArticles$ !: Observable<Article[]>
  articleId !: string;
  blogCategories !: Observable<ArticleCategory[]>

  constructor(
    private heroService : HeroBannerService,
    private blogService : BlogService,
    private activatedRoute : ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.getSencondaryHeroBannerData(this.heroBannerId);
    this.getArticleId();
    this.getLastCreatedArticles();
    this.getBlogCategoryList();
  }

  getArticleId() : void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.articleId = params.get('id') as string;
      this.getArticleContent(this.articleId);
    })
  }

  getSencondaryHeroBannerData(id : string) : void {

    const heroBannerData : SecondaryHeroBanner = {
        id: "",
        image : "../../../../../assets/img/hero-banner/secondary/articles.jpg",
        title : "Dernières Actualités",
        menus : [
          {
            icon : "faHome",
            label : "Accueil",
            url : ""
          },
          {
            label : "Articles",
            url : "/articles"
          },
          {
            label : "..."
          }
        ]
      }

      this.secondaryHeroBannerData$ = of(heroBannerData)
    }
  
  getArticleContent(id: string): void{
    this.articleData$ = this.blogService.getArticleById(id);
  }

  getLastCreatedArticles() : void {
    const queryParams= "limit=5"
    this.lastArticles$ = this.blogService.getBlogArticlesByRubricId(queryParams);
  }

  getBlogCategoryList() : void {
    this.blogCategories = this.blogService.getBlogCategoryList();
  }
}
