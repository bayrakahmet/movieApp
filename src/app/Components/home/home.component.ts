import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Data/movies';
import { MovieService } from 'src/app/Service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movies[] = [];
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => this.movies = movies);
    
  }

  ngDoCheck(): void{
    console.log('filmcikler', this.movies);
    if(this.movies.length && !this.watchedMovies.length) {
      this.yetToWatchMovies = this.movies.filter((m)=> !m.isFav && !m.isWatched);
      this.watchedMovies = this.movies.filter((m)=> m.isWatched);
    }
  }

  /*
  onFavClick(movie: Movies): void{
    this.movieService.updateMovie({
      ...movie, isFav: !movie.isFav, isWatched: movie.isFav ? true: movie.isWatched})
      .subscribe((updatedMovie => {
        if(updatedMovie.isWatched) {
          const alreadyWatched = this.watchedMovies.find(movie => movie.id === updatedMovie.id);
          if(alreadyWatched) {
            alreadyWatched.isFav = updatedMovie.isFav
            this.watchedMovies = this.watchedMovies.map((m) => {
              if(m.id === updatedMovie.id){
                return updatedMovie;
              } 
              return m;
            })
          } else {
            this.watchedMovies.push(updatedMovie);
          }
        }
      } ))
  }


  onWatchedClick(movie: Movies): void{
    const payLoadMovie = { ...movie, isWatched: !movie.isWatched };
    payLoadMovie.isFav = payLoadMovie.isWatched ? payLoadMovie.isFav: false;
    this.movieService.updateMovie(payLoadMovie).subscribe((updatedMovie) => {
      if(updatedMovie.isWatched) {
        this.watchedMovies.push(updatedMovie);
        this.yetToWatchMovies = this.yetToWatchMovies.filter((m) => m.id !== updatedMovie.id);
      } else {
        this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
        this.yetToWatchMovies.push(updatedMovie);
      }
    })
  }
*/
}
