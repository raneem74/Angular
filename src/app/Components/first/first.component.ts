import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  input="";
  inputChanged(e:any){
    this.input = e.target.value;
  }
  Clear(){
    this.input="";
  }
}
