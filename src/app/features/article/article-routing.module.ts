import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { ArticleDetailContainerComponent } from './components/article-detail-container/article-detail-container.component';

const routes: Routes = [
  {
    path:"",
    component : ArticleContainerComponent,
    data : {
      backgrounded : true
    }
  },
  {
    path:":id",
    component : ArticleDetailContainerComponent,
    data : {
      backgrounded : true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
