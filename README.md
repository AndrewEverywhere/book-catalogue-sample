# Book Catalogue Application

This project was created for demostrating a web application/api developed with MEAN Stack. 

An instance of the application is running at [Heroku](https://dry-headland-63113.herokuapp.com/)

##Prerequisits
To run or work with source code , following products should be installed.
[node.js](https://nodejs.org/en/download/)
[MongoDB](https://docs.mongodb.com/manual/installation/)

Run "mongod -dbpath <local_path>" to start a local mongoDB at http://localhost:27017 in default.

## After code checkout
Run `npm install` to install all dependencies.   
Run `npm start` to start application and API.  In Chrome or Firefox, open application `http://localhost:4200/`

## Build
The project is automatically build after "npm install", or  
Run `ng build` to build the project manually. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Cloud deployment
The project can be be automatically deployed to [Heroku](https://dry-headland-63113.herokuapp.com/) by run command:
`https://heroku.com/deploy?template=https://github.com/AndrewEverywhere/book-catalogue-sample.git`

Or, by clicking the button

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/AndrewEverywhere/book-catalogue-sample.git)
