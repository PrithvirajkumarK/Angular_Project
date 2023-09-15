import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent {
  movieid:string=""
  movieName:string=""
  movieImage:string=""
  movieRating:number=0
  movieDescription:string=""
  movietrailer:string=""


  moviesList;
  constructor(movieService: MovieService){
    this.moviesList= movieService.movies
  }
  addmovie(){
    const movie={
      "id":this.movieid,
      "name":this.movieName,
      "poster":this.movieImage,
      "rating": this.movieRating,
      "summary": this.movieDescription,
      "trailer":this.movietrailer
    }
    this.moviesList.push(movie)
    console.log(movie)
  }
}
