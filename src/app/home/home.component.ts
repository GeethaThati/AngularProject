import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="image">
  <img [src]="img" width="100%" height="400px">
</div>
<div class="search">
  <select class="input">
      <option value=""disabled selected>Destination Type</option>
      <option>Domestic</option>
      <option>Intrenational</option>
  </select>  
  <select class="input1">
      <option value="" disabled selected>City/Country</option>
      <option>Assam</option>
      <option>Andhra Pradesh</option>
      <option>Himachal Pradesh</option>
      <option>Jammu & Kashmeer</option>
      <option>Kerala</option>
      <option>KanyaKumari</option>
      <option>Hyderabad</option>
      <option>Telangana</option>
      <option>TamilaNadu</option>
 
  </select>
  <select class="input2">
      <option value="" disabled selected>Duration (in days)</option>
      <option>1 TO 3</option>
      <option>4 TO 6</option>
      <option>7 TO 9</option>
      <option>10 More..</option>
  
  </select>
  <select class="input3">
      <option value="" disabled selected>Month</option>
      <option>Jan 2021</option>
      <option>Feb 2021</option>
      <option>March 2021</option>
      <option>April 2021</option>
  
  </select>
</div>
<button class="but">Search</button>
<div id="places">
<div class="row">
  <div class="column">
    <div class="content">
      <img [src]="img1" style="width:100%">
      <h3>Ramappa Temple</h3>
      <p>Famous Temple in Warangal</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img [src]="img2" alt="Lights" style="width:100%">
      <h3>Charminar</h3>
      <p>Famous in Hyderabad</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img [src]="img3" alt="Nature" height="160px" width="290px">
      <h3>Laknavaram</h3>
      <p>Famous Lake</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img [src]="img4" alt="Mountains" style="width:100%" height="160px">
      <h3>Bogatha</h3>
      <p>Famous waterfall</p>
    </div>
  </div>
</div>
 <div id="footer">
      <p>@2020 copyrights Geetha Thati</p>
  </div>
     `,
  styles: [`.search{
    width: 60%;
    height: 200px;
    border-radius: 30px;
   
    position: absolute;
    top: 470px;
    left: 250px;
    background-color: rgb(234, 234, 247);
}
.input{
    border: none;
    position: absolute;
    top: 25%;
    left: 4%;
    width: 42%;
    padding: 12px 20px;
    box-sizing: border-box;
}
.input1{
    border: none;
    position: absolute;
    top: 25%;
    left: 55%;
    width: 42%;
    padding: 12px 20px;
    box-sizing: border-box;
}
.input2{
    border: none;
    position: absolute;
    top: 50%;
    left: 4%;
    width: 42%;
    padding: 12px 20px;
    box-sizing: border-box;
}
.input3{
    border: none;
    position: absolute;
    top: 50%;
    left: 55%;
    width: 42%;
    padding: 12px 20px;
    box-sizing: border-box;
}
.but{
    border: none;
    color: white;
    padding: 15px 100px;
    text-align: center;
    background-color: blue;
    border-radius: 10px;
    position: absolute;
    top: 106%;
    left: 38%;
}
* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
    padding: 20px;
    font-family: Arial;
  }
  
  /* Center website */
  .main {
    max-width: 100%;
    margin: auto;
  }
  
  h1 {
    font-size: 50px;
    word-break: break-all;
  }
  
  .row {
    margin: 8px -16px;
  }
  
  /* Add padding BETWEEN each column (if you want) */
  .row,
  .row > .column {
    padding: 8px;
  }
  
  /* Create four equal columns that floats next to each other */
  .column {
    float: left;
    width: 25%;
  }
  
  /* Clear floats after rows */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Content */
  .content {
    background-color:  rgb(234, 234, 247);
    padding: 10px;
  }
  #places{
      width: 100%;
      height: 350px;
      position: relative;
      top: 120px;
    
      border-radius: 20px;
  }
       #footer{
           width: 100%;
           height: 100px;
          text-align: center;
          position: relative;
          top: 20px;
           padding: 30px;
           background-color:  rgb(234, 234, 247)
       }`]
})
export class HomeComponent implements OnInit {

  img:any ="assets/images/img2.jpg";
  img1:any ="assets/images/rammapa.jpg";
  img2:any ="assets/images/char.jpg";
  img3:any ="assets/images/lakna.jpg";
  img4:any ="assets/images/bogatha.jpg";
  constructor() { }

  ngOnInit() {
  }

}
