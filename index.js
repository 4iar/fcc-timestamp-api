const express = require('express');
const app = express();

// let Heroku set the port
const port = process.env.PORT || 8080;

app.get('/', (request, response) => {
  response.end("hello world!");
});

app.listen(port);
