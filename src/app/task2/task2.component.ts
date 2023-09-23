import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { movie } from '../app.component';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
//  @Input () image =""
//  @Input () movieName =""
//  @Input () movieDescription =""
@Input () movie:any

    
    @Output() removeMovie = new EventEmitter();
    count=0
    increment(){
      console.log("Increment")
     this.count++
    }
    dcount=this.count
    decrement(){
      this.dcount++
    }
    
    show=true
    lesssummary(){
    this.show= !this.show;
    }

    constructor(private router:Router,private movieservice:MovieService){
    }
    getdetails(){
      this.router.navigate(['/movies',this.movie.id])
    }
    editmovie(){
      this.router.navigate(['/movies/edit', this.movie.id])
    }
   
    deleteMovie() {
      this.movieservice.deleteMovieById(this.movie.id).subscribe(() => {
        console.log('Movie deleted successfully');
        this.removeMovie.emit();
      });
}
}
