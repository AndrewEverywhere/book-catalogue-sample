# Book Catalogue Application

This project was created for demostrating a web application and RESTful API developed with MEAN Stack. 

An instance of the application is running at [Heroku](https://dry-headland-63113.herokuapp.com/)

## Prerequisits
To run or work with source code locally, following product or bundle should be installed.

  * [node.js](https://nodejs.org/en/download/)

  * [MongoDB](https://docs.mongodb.com/manual/installation/)

      Run `$ MONGO_SEED=true npm start` to seed mongodb for first running
  * Run ` npm install -g @angular\cli` to install Angular-Cli.

## After code checkout

Run `npm install` to install all dependencies.

Run `npm start` to start application and API.  In Chrome or Firefox, open application at `http://localhost:4200/`

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
The project can be deployed to Heroku by run command:
`https://heroku.com/deploy?template=https://github.com/AndrewEverywhere/book-catalogue-sample.git`

Or, by clicking the button 

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/AndrewEverywhere/book-catalogue-sample.git)
