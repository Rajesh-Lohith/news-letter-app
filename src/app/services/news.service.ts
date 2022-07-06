import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpclient: HttpClient) {}

  getNews() {
    let url = `http://localhost:8080/news/get`;
    return this.httpclient.get(url);
  }
}
