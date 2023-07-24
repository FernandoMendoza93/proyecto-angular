// tmdb.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'f4f7c6862cb7519fa881f2495f6aef1c';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(pageIndex: number): Observable<any> {
    const popularMoviesUrl = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${pageIndex}`;
    return this.http.get<any>(popularMoviesUrl);
  }
}
