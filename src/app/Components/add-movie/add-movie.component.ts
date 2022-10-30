import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MovieService } from 'src/app/Service/movie.service';
import { Movies } from 'src/app/Data/movies';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieTitle: string = '';
  image: string = '';
  isWatched: boolean = false;
  isFav: boolean = false;

  constructor(private movieService: MovieService, 
    private router: Router ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    /*
    if(this.movieTitle && this.image) {
      const newMovie: Movies = {
        isFav: this.isFav,
        isWatched: this.isWatched,
        image: this.image,
        title: this.movieTitle,
        id: Math.round(Math.random() * 100000),
      }
      this.movieService.addMovie(newMovie).subscribe((movie) => this.router.navigate(['/']));
    }
    */
  }
}
