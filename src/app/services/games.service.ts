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
          .set('X-RapidAPI-Key', '7500219dc7msh3c0663b0d7b5241p1ee468jsnefcb7c656f2a')
          .set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
      });
  }

}
