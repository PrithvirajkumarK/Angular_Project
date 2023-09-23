import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormBuilder, Validators } from '@angular/forms';
import { movie } from '../app.component';
import { Router } from '@angular/router';
import { LANGUAGES,GENRES} from './global';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent {
    // movieid:string=""
    // movieName:string=""
    // movieImage:string=""
    // movieRating:number=0
    // movieDescription:string=""
    // movietrailer:string=""


    languages = LANGUAGES;

    genres = GENRES;
  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    languages:[[]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    genres:[[]],
    censorRating:[]
  });

  moviesList;
  constructor(private movieService: MovieService,private fb:FormBuilder,private router:Router){
    this.moviesList= movieService.movieList;
  }

  get name() {
    return this.movieForm?.get('name');
  }
  get poster() {
    return this.movieForm?.get('poster');
  }
  get rating() {
    return this.movieForm?.get('rating');
  }
  get summary() {
    return this.movieForm?.get('summary');
  }
  get trailer() {
    return this.movieForm?.get('trailer');
  }
  

  addmovie(){
    const newmovie= this.movieForm.value
    if(this.movieForm.valid){
      this.movieService.addMovieList(newmovie as movie).subscribe(() =>{ 
        this.router.navigate(["/movie-list"])})

      
      console.log(newmovie);
    }
  }
}
