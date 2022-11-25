import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/Game.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }

  getGames(category: string) {
    return this.http.get<Game[]>(`${environment.baseApi}/games?category=${category}`,
      {
        headers: new HttpHeaders()
          .set('X-RapidAPI-Key', environment.RapidAPIKey)
          .set('X-RapidAPI-Host', environment.RapidAPIHost)
      });
  }

}
