import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  constructor(private _http: HttpClient) { }

  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a';

  techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=93db02f9184b418b957e511a5733c46a'

  topHeadlines(): Observable<any>{
    return this._http.get(this.topNews);
  }

  techHeadlines(): Observable<any>{
    return this._http.get(this.techNews);
  }
}
