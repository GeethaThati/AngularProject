import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: '<img [src]="img" width="100%" height="500px" >  ',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img:any = "assets/images/imp.jpg";
  constructor() { }

  ngOnInit() {
  }

}
