import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/blog';
import { BlogService } from 'src/app/shared/services/blog/blog.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  lastNews$ !: Observable<Article[]>;

  constructor( private blogService : BlogService){}

  ngOnInit(): void {
      this.getLastNews();
  }

  getLastNews() : void{
    this.lastNews$ = this.blogService.getBlogArticlesByRubricId();
  }
}
