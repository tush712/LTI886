import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:Movie[];
  constructor(private movieService:MovieService,private myRoute:Router) { 
    this.movies = this.movieService.getMovies();
  }
nav(){
    this.myRoute.navigate([""]);
}
  ngOnInit(): void {
  }

}
