# Component Interaction

creating an Angular app with two components that allows users to add new data via textboxes and displays it in a table. Here are the steps:

## **1. Set up a new Angular project**

To create a new Angular project, open up a terminal window and run the following command:

```

ng new my-app
```

This will create a new Angular project called **`my-app`**.

## **2. Create the first component**

To create the first component, use the following command in the terminal:

```

ng generate component input-form
```

This will create a new component called **`input-form`** in the **`src/app`** folder.

In the **`input-form`** component, open the **`input-form.component.html`** file and add the following code:

```html
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" [(ngModel)]="name">

  <label for="age">Age:</label>
  <input type="number" id="age" [(ngModel)]="age">

  <button (click)="add()">Add</button>
</div>
```

This code creates two textboxes for name and age, along with an add button. The **`ngModel`** directive is used to bind the values of the textboxes to properties on the component (**`name`** and **`age`**).

<aside>
💡 Make sure to import the FormsModule from @angular/forms in your NgModule :

</aside>

You can do this by adding the following line to the imports array in your @NgModule decorator in the AppModule file `app.module.ts.`

```tsx
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  ...
})
```

In the **`input-form.component.ts`** file, add the following code:

```tsx

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  name: string;
  age: number;

  @Output() addPerson = new EventEmitter<{name: string, age: number}>();

  add() {
    if (!this.name || !this.age) {
      alert('Please enter a name and age');
      return;
    }

    this.addPerson.emit({name: this.name, age: this.age});

    this.name = '';
    this.age = null;
  }
}

```

This code defines the **`InputFormComponent`** class and creates two properties (**`name`** and **`age`**) to store the values of the textboxes. The **`@Output`** decorator is used to define an event emitter called **`addPerson`**, which will be used to send data from the **`input-form`** component to the parent component.

The **`add()`** method is called when the user clicks the add button. It checks that both the name and age fields are filled in, and if so, it emits an event containing the name and age values. It then clears the textboxes.

## **3. Create the second component**

To create the second component, use the following command in the terminal:

```

ng generate component data-table

```

This will create a new component called **`data-table`** in the **`src/app`** folder.

In the **`data-table`** component, open the **`data-table.component.html`** file and add the following code:

```html

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let person of people">
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </tbody>
</table>

```

This code creates an HTML table with two columns for name and age. It uses the **`ngFor`** directive to loop over the **`people`** array and display each person in a new row.

In the `data-table.component.ts file, add the following code:

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e)

```tsx

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() people: {name: string, age: number}[] = [];
}

```

This code defines the **`DataTableComponent`** class and creates an input property called **`people`**, which is an array of objects containing a **`name`** and **`age`** property. This property is bound to the **`*ngFor`** directive in the template to display the table data.

## **4. Create the parent component**

The parent component will contain both the **`input-form`** and **`data-table`** components and will handle communication between them.

In the **`app.component.html`** file, add the following code:

```html

<app-input-form (addPerson)="onAddPerson($event)"></app-input-form>
<app-data-table [people]="people"></app-data-table>

```

This code creates an instance of the **`input-form`** component and an instance of the **`data-table`** component. It binds the **`addPerson`** event of the **`input-form`** component to the **`onAddPerson()`** method of the parent component. It also binds the **`people`** property of the **`data-table`** component to an array called **`people`**.

In the **`app.component.ts`** file, add the following code:

```tsx

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: {name: string, age: number}[] = [];

  onAddPerson(person: {name: string, age: number}) {
    this.people.push(person);
  }
}

```

This code defines the **`AppComponent`** class and creates an array property called **`people`** to store the data entered in the **`input-form`** component. The **`onAddPerson()`** method is called when the **`addPerson`** event is emitted from the **`input-form`** component. It adds the new person object to the **`people`** array.

## **5. Run the app**

To run the app, open up a terminal window and navigate to the root folder of your project. Run the following command:

```

ng serve --open
```

This will compile the Angular app and open it in your default browser. You should see the **`input-form`** component with two textboxes and an add button, as well as the **`data-table`** component displaying the data entered via the form. If you try entering invalid data (e.g. leaving the name or age fields blank), an alert will appear prompting you to enter valid data.