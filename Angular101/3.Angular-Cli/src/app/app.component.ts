import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent implements OnInit {
  title = 'Hello Movies.';

  movies: Movie[];

  ngOnInit(): void {
    this.getMovies();
  }

  constructor(private movieService: MovieService) {}

  getMovies(): void {
    this.movieService.getMovies().then(movies => this.movies = movies);
  }
}
