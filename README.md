# Interview - Source interactive

API that gives the ranking of teams in relation to their matches

## Installation
```bash
yarn start
```

## Database 
The api and the database are hosted on Heroku, on a MariaDb engine.
The API is available with this url :

[https://source-interview.herokuapp.com/api/teams/ranking](https://source-interview.herokuapp.com/api/teams/ranking)

## Dependencies

The api is developed with node.js on the [Express framework](https://expressjs.com/)

- [body-parser](https://www.npmjs.com/package/body-parser) : For parameters in the query
- [dotenv](https://www.npmjs.com/package/dotenv) :
  To use environment variables
- [express](https://expressjs.com/) : node js framework
- [mariadb](https://www.npmjs.com/package/mariadb) : To establish the connection with the database


