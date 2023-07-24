import { Component, OnInit } from '@angular/core';
import { TmdbService } from './tmdb.service';

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  totalMovies: number = 0;
  pageIndex: number = 0;
  pageSize: number = 20; // Set your desired page size here

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.tmdbService.getPopularMovies(this.pageIndex + 1).subscribe(
      (data) => {
        this.totalMovies = data.total_results;
        this.movies = data.results.map((movie: any) => ({
          title: movie.title,
          overview: movie.overview,
          poster_path: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
        }));
      },
      (error) => console.error('Error al obtener lista de películas', error)
    );
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.loadMovies();
  }
}
