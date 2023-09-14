import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count=0
increment(){
  console.log("Increment")
 this.count++
}
dcount=this.count
decrement(){
  this.dcount++
}
get msg(){
  return this.count - this.dcount >=10
}
}
