import { Component } from '@angular/core';

type movie={
  id:string
  name:string
  poster:string
  rating:number
  summary:string
  trailer:string
}
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
 class AppComponent {
  title = 'Angular_Project';

}

export{movie , AppComponent}
