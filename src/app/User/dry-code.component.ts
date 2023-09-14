import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dry-code',
  templateUrl: './dry-code.component.html',
  styleUrls: ['./dry-code.component.css']
})
export class DryCodeComponent {
@Input () profile={
  name:"RRR",
    image:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
}
}
