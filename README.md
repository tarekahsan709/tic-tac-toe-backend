# Tic Tac Toe backend

[![](https://github.com/tarekahsan709/tic-tac-toe-backend/workflows/Build/badge.svg)](https://github.com/tarekahsan709/tic-tac-toe-backend/actions?query=workflow%3ABuild) [![](https://github.com/tarekahsan709/tic-tac-toe-backend/workflows/Tests/badge.svg)](https://github.com/tarekahsan709/tic-tac-toe-backend/actions?query=workflow%3ATests)



## :bookmark: Table of Contents
- [Built with](#hammer-built-with)
- [Tools and Technologies](#gear-tools-and-technologies)
- [Installation](#installation)
- [Run and Test](#run)

## :hammer: Built with
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## :gear: Tools and Technologies
- [Docker](https://www.typescriptlang.org/)
- [Heroku](https://expressjs.com/)
- [Prettier](https://www.mongodb.com/)

  
##  Installation
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. From project root folder install all the dependencies: `npm i`

## Run

### Development mode

`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, TypeScript compiler and Express server.


### Production mode

`npm run prod`: run the project with a production bundle [localhost:3000](http://localhost:3000)

### Docker

1. `docker-compose up`
2. Go to [localhost:3000](http://localhost:3000)

### Running tests

Run `npm run testbe` to execute the backend tests via [Mocha](https://mochajs.org/) (it requires `mongod` already running).

### Running linters

Run `npm run lint` to execute [TS linting](https://github.com/palantir/tslint), [HTML linting](https://github.com/htmlhint/HTMLHint) and [SASS linting](https://github.com/sasstools/sass-lint).

### Author

- [Nazmul Ahsan](https://github.com/tarekahsan709)
