import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students = [
    {
      name: "ahmed",
      age: 20,
      email: 'ahmed@gmail.com'
    },
    {
      name: "mohammed",
      age: 22,
      email: 'mohammed@gmail.com'
    },
    {
      name: "sara",
      age: 19,
      email: 'sara@gmail.com'
    },
    {
      name: "fatma",
      age: 21,
      email: 'fatima@gmail.com'
    }
  ];
  
}
