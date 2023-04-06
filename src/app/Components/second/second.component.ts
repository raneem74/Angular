import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  imgNumbers = ['1','2','3','4'];
  imgNumber = 0;
  imgSrc = "assets/Ramadan/"+this.imgNumbers[this.imgNumber]+".jpg";
  intervalId:any;
  Next(){
    if(this.imgNumber<3)
      this.imgNumber++;
    this.imgSrc = "assets/Ramadan/"+this.imgNumbers[this.imgNumber]+".jpg";
    
  }
  Prev(){
    if(this.imgNumber>0)
      this.imgNumber--;
    this.imgSrc = "assets/Ramadan/"+this.imgNumbers[this.imgNumber]+".jpg";
  }
  Slide(){
        this.intervalId=setInterval(()=>{
        this.imgNumber=(this.imgNumber+1)%this.imgNumbers.length;
        this.imgSrc = "assets/Ramadan/"+this.imgNumbers[this.imgNumber]+".jpg";
        console.log(this.imgSrc);
    },500);
  }
  Stop(){
    clearInterval(this.intervalId);
  }
}
