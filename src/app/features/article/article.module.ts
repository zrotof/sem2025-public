import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { SecondaryHeroComponent } from 'src/app/shared/components/secondary-hero/secondary-hero.component';
import { ArticleListMenuComponent } from './components/article-container/article-list-menu/article-list-menu.component';
import { ArticleListItemsComponent } from './components/article-container/article-list-items/article-list-items.component';
import { ArticleDetailContainerComponent } from './components/article-detail-container/article-detail-container.component';

@NgModule({
  declarations: [
    ArticleContainerComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SecondaryHeroComponent,
    ArticleListMenuComponent,
    ArticleListItemsComponent,
    ArticleDetailContainerComponent
  ]
})
export class ArticleModule { }
