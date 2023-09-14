import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-clr',
  templateUrl: './dynamic-clr.component.html',
  styleUrls: ['./dynamic-clr.component.css']
})
export class DynamicClrComponent {
clr = ""
updateColor(event:any){
  this.clr = event.target.value
}
}
