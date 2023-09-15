import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
//  @Input () image =""
//  @Input () movieName =""
//  @Input () movieDescription =""
@Input () movie={
  "id": "99",
  "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    
    }
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
   
   
 
}
