import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { StudentsComponent } from './Components/students/students.component';
import { DetailsComponent } from './Components/details/details.component';
import { ErrorComponent } from './Components/error/error.component';

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
      {path:"**",component:ErrorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
