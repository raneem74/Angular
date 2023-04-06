# Create components in Angular

1. Install the Angular CLI by running the following command in your terminal:(only once per machine)
    
    ```
    
    npm install -g @angular/cli
    
    ```
    
2. Once the Angular CLI is installed, you can create a new Angular app by running the following command:
    
    ```
    
    ng new my-app
    
    ```
    
    Replace **`my-app`** with the name you want to give your app.
    
3. Change into the directory of the app you just created:
    
    ```
    
    cd my-app
    
    ```
    
4. Next, create folder “Components” (src→app→Components) and Change into this directory, you can generate two components using the Angular CLI. Run the following command to generate the first component:
    
    ```
    
    ng generate component component-one
    //or
    ng g c component-one
    
    ```
    
    This will create a new folder called **`component-one`** with all the files needed for your component.
    
5. Repeat the previous step to generate the second component:
    
    ```
    
    ng generate component component-two
    
    ```
    
6. Now you have two components in your app. You can open the project in your code editor and navigate to the **`app`** folder. You should see two subfolders named **`component-one`** and **`component-two`**. Inside each of these folders, you'll find several files, including a **`.ts`** file, a **`.html`** file, and a **`.css`** file.
    
    Also the two Components are added to app.module.ts file in 
    
    ```tsx
    @NgModule({
      declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        
      ],
    ```
    
7. In order to display these components, you need to update the **`app.component.html`** file. This is the main template that will be displayed when the app loads. Open **`src/app/app.component.html`** and replace its contents with the following:
    
    (The tag name is defined in selector property in ts file)
    
    ```
    
    <app-component-one></app-component-one>
    <app-component-two></app-component-two>
    
    ```
    
    This code is telling Angular to display both **`component-one`** and **`component-two`** on the page.
    
8. Finally, you can run the app by running the following command:
    
    ```
    
    ng serve -o
    
    ```
    
    This will start a development server and open the app in your default browser at **`http://localhost:4200`**.