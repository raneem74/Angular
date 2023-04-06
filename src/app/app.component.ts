import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentInteraction';

  students: {name: string, age: string}[] = [];

  onAddStudent(student: {name: string, age: string}) {
    this.students.push(student);
  }
}
