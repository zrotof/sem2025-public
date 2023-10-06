import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../../models/blog';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogType } from '../../enums/blog-type';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  categoryBaseUrl = environment.apiUrl+"rubriques/";
  articleBaseUrl = environment.apiUrl+"articles/";

  constructor( private http : HttpClient) { }

  getBlogCategoryList() : Observable<ArticleCategory[]>{
    return this.http.get<any>(`${this.categoryBaseUrl}list`).pipe(
      map(result => result.data),
      map(result => result.map((result : ArticleCategory) => { return {...result,state: false}})),
    );
  }

  getNewBlogArticles(): Observable<Article[]> {
    return this.http.get<any>(`${this.articleBaseUrl}list?page=1&limit=9`).pipe(
      map(res=> res.items),
      map(res => res.map( (item : any) => {
        return{
          id : item.id,
          title : item.title,
          media : item.cover_image,
          date : item.created_at,
          description : item.description,
          mediaType : item.media.media_type === 'image' ? BlogType.Image : BlogType.Video
        }
      }))
    )
  }

  getBlogArticlesByCategoryId( id : string) : Observable<Article[]> {
    return this.http.get<any>(`${this.articleBaseUrl}list?page=1&limit=10&rubrique_id=${id}`).pipe(
      map(res=> res.items),
      map(res => res.map( (item : any) => {
        return{
          id : item.id,
          title : item.title,
          media : item.media.media_url,
          date : item.created_at,
          description : item.description,
          mediaType : item.media.media_type === 'image' ? BlogType.Image : BlogType.Video
        }
      }))
    )
  }

  getArticleById( id : string) : Observable<Article> {
    return this.http.get<any>(`${this.articleBaseUrl}display/${id}`).pipe(
      map(res => res.article),
      map(res => {
        return{
          id : res.id,
          title : res.title,
          media : res.media.media_url,
          date : res.created_at,
          description : res.description,
          mediaType : res.media.media_type === 'image' ? BlogType.Image : BlogType.Video
        }
      })
    )
  }

}
