import { Component } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent {
  clr = ""
  colorList =['red','green','orangered','pink']

  addColor(){
    this.colorList.push(this.clr)
  }
}
