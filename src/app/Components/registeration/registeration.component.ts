import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  name = "";
  age = "";

  @Output() SendStudent = new EventEmitter<{name: string, age: string}>();

  add() {
    if (!this.name || !this.age || this.name.length<3 || parseInt(this.age) < 20 || parseInt(this.age) > 40) {
      console.log(!this.name)
      console.log(!this.age)
      console.log(this.name.length<3)
      console.log(parseInt(this.age) < 20)
      console.log(parseInt(this.age) > 40)
      
      alert('Please enter a name and age');
      return;
    }

    this.SendStudent.emit({name: this.name, age: this.age});

    this.name = '';
    this.age = '';
  }

}
