import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  category: string = '';
  @Output() emitfindGame = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.category) {
      this.emitfindGame.emit(this.category);
    }
  }

}
