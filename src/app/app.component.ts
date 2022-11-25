import { Component } from '@angular/core';
import { GamesService } from './services/games.service';
import { Game } from './models/Game.model';
import { catchError, Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'free-to-game';
  listGames: Game[] = [];
  gameSubscription!: Subscription;
  error: any;
  constructor(
    private gamesService: GamesService
  ) { }

  findGames(category: string): void {
    this.error = null;
    this.gameSubscription = this.gamesService.getGames(category)
      .pipe(
        catchError(err => {
          const { error } = err;
          this.error = error;
          this.listGames = [];
          return throwError(() => err);
        })
      )
      .subscribe((resp: Game[]) => {
        this.listGames = resp;
      });
  }

  ngOnDestroy(): void {
    this.gameSubscription.unsubscribe();
  }
}
