import { Component } from '@angular/core';
import { movie } from '../app.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie-form',
  templateUrl: './edit-movie-form.component.html',
  styleUrls: ['./edit-movie-form.component.css']
})
export class EditMovieFormComponent {

  id: string = '';

  movie: movie = {
    id: '',
    name: '',
    poster: '',
    rating: 0,
    summary: '',
    trailer: '',
  };
  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
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
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
this.movieService
      .getMovieById(this.id)
      .subscribe((mvList) => {
        this.movieForm.patchValue(mvList);
      });
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

  editmovie(){
    const newmovie= this.movieForm.value
    if(this.movieForm.valid){
      this.movieService.updateMovieList(newmovie as movie).subscribe(() =>{ 
        this.router.navigate(["/movies"])})

      
      console.log(newmovie);
    }
  }
}
