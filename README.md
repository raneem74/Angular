# Routing from scratch and form validation using FormsModule

### Generate Components

```tsx
ng generate component home
ng generate component student
ng generate component details
ng generate component error

```

### in `app.module.ts`

```tsx
import { RouterModule } from '@angular/router'; //to use routing 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//to use form and make validation

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentsComponent,
    DetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"students",component:StudentsComponent},
      {path:"students/:id",component:DetailsComponent},
      {path:"**",component:ErrorComponent},//any other url
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```

### in `header.component.html`

```tsx
<header>
  <nav>
    <a routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{exact:true}">Home</a>
    <a routerLinkActive="active" routerLink="/students" [routerLinkActiveOptions]="{exact:true}">Students</a>
    <a routerLinkActive="active" routerLink="/students/1">Details</a>
    <a routerLinkActive="active" routerLink="/anyThing">Error</a>
		<!-- to make active link has an "active" class to let the active one highlighted -->
  </nav>
</header>
```

### in `header.component.css`

```css
nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #57c7e9;
  }
  
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  
  a:hover {
    color: rgb(41, 47, 54);
  }

  .active{
    color: rgb(226, 98, 43);
  }
```

### in `app.component.html`

```html
<app-header></app-header>
<router-outlet></router-outlet><!-- to let this part change the displayed component using routing configrations we put in app.module (this part change without page refresh)-->
```

# now let's create each component body.

---

### make global style in `style.cs`.

```css
/* You can add global styles to this file, and also import other style files */
section {
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
  }
  
  label {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="email"] {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #ccc;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  table{
    margin: auto;
  }

   th,td {
    padding: 12px;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
```

## **home component**

### in `home.component.html`

```html
<section>
    <h2>Home Page</h2>
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" formControlName="name">
        <div *ngIf="!nameValid" style="color: red;">
            Name Not Valid
        </div>
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" formControlName="age">
        <div *ngIf="!ageValid" style="color: red;">
            age Not Valid
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email">
        <div *ngIf="!emailValid" style="color: red;">
            Email Not Valid
        </div>
      </div>
      <button type="submit" [disabled]="myForm.invalid">Submit</button>
    </form>
  </section>
```

- Create a FormGroup in the home.component.ts file to validate the input fields
- Add the necessary validators for the input fields (required, age range, email format)
- When the form is submitted, you can display the data on the same page or navigate to a new page to display the data.

### in `home.component.ts`

```tsx
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
```

### in `home.component.css` or use global style.

```css
section {
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
  }
  
  label {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="email"] {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #ccc;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
```

## students **component**

### in `students.component.html`

```html
<section>
    <h2>Students Page</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let student of students">
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.email }}</td>
          </tr>
      </tbody>
    </table>
  </section>
```

### in `students.component.ts`

```tsx
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
```

## details **component**

### in `details.component.html`

```html
<section>
    <h2>Details Page</h2>
    <p>{{student.name}}</p>
    <p>{{student.age}}</p>
    <p>{{student.email}}</p>
  </section>
```

### in `details.component.ts`

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
student ={
  'name': 'mahmoud',
  'age': '20',
  'email': 'mahmoud@gmail.com',
};

}
```