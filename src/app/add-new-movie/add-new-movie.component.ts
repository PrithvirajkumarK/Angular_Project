import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent {
  
  movieName:string=""
  movieImage:string=""
  movieRating:number=0
  movieDescription:string=""

  moviesList;
  constructor(movieService: MovieService){
    this.moviesList= movieService.movies
  }
  addmovie(){
    const movie={
      "name":this.movieName,
      "poster":this.movieImage,
      "rating": this.movieRating,
      "summary": this.movieDescription,
    }
    this.moviesList.push(movie)
    console.log(movie)
  }
}
