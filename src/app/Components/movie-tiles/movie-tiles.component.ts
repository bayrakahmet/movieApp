import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faNotFav, faEye as faNotWatched } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-movie-tiles',
  templateUrl: './movie-tiles.component.html',
  styleUrls: ['./movie-tiles.component.scss']
})
export class MovieTilesComponent implements OnInit {
@Input() imageUrl: string = '';
@Input() id: number = 0;
@Input() isWatched: boolean = false;
@Input() isFav: boolean = false;
@Output() favClick = new EventEmitter();
@Output() watchedClick = new EventEmitter();

faFav = faNotFav;
faWatched = faNotWatched;

  constructor() { }

  ngOnInit(): void {

    this.faFav = this.isFav ? faHeart: faNotFav;
    this.faWatched = this.isWatched ? faEye : faNotWatched;
  }

  onFavClick():void{
    this.favClick.emit();
  }

  onWatchedClick(): void {
    this.watchedClick.emit();
  }

}
