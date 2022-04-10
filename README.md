# Region and Country App

Region and Country Angular application using NgRx with tests.

- This App uses an API to display a list of regions, countries and the details of a selected country.
- NgRx libraries is used to manage the state of the app.
- Jasmine, Karma and Cypress for unit and e2e tests.
- Angular Material for presentation.

### Technologies Used

- [@ngrx/store](https://ngrx.io/guide/store) - RxJS powered state management for Angular apps, inspired by Redux
- [@ngrx/effects](https://ngrx.io/guide/effects) - Side effect model for @ngrx/store
- [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
- [@angular/router](https://angular.io/guide/router) - Angular Router
- [@angular/material](https://github.com/angular/material2) - Angular Material

Pleas use below version if you encounter any issue with node version.
nvm install 16.13.0
nvm use 16.13.0

# Navigate to the app's root directory

cd angular

# Install the dependencies

npm install

# Run the application

ng serve

```

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via Karma.

### Running end-to-end tests

Run `ng e2e` to execute end-to-end tests via Cypress.
```
