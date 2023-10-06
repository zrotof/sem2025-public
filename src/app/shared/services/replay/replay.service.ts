import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../../models/blog';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogType } from '../../enums/blog-type';
import { ReplayMenu } from '../../models/replay';

@Injectable({
  providedIn: 'root'
})

export class ReplayService {

  categoryBaseUrl = environment.apiUrl+"rubriques/";
  articleBaseUrl = environment.apiUrl+"articles/";

  constructor( private http : HttpClient) { }

  getMenuList() : Observable<ReplayMenu[]>{

    const replayMenu = [
      {
        id: "1",
        label: "Précédents Lives",
        state: false
      },
      {
        id: "2",
        label: "Meetings",
        state: false
      },
      {
        id: "3",
        label: "Débats Télévisés",
        state: false
      },
      {
        id: "4",
        label: "Interview",
        state: false
      },
      {
        id: "5",
        label: "Autres",
        state: false
      }
    ]

    return of(replayMenu)
  }

}
