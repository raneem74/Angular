import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  myForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, [Validators.required, Validators.min(20), Validators.max(40)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  

  onSubmit() {
    //put submit logic here
  }

  //input validation
  get nameValid(){
    return this.myForm.controls["name"].valid
  }
  get ageValid(){
    return this.myForm.controls["age"].valid
  }
  get emailValid(){
    return this.myForm.controls["email"].valid
  }
}
