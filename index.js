"use strict";

const express = require('express');
const strftime = require('strftime')
const moment = require('moment');

const createJsonResponse = require('./createJsonResponse');


const app = express();

// let Heroku set the port
const port = process.env.PORT || 8080;

app.get('/:date', (request, response) => {
  const dateStr = request.params.date;

  let time = {natural: null, unix: null};

  if (isNaN(Number(dateStr))) {
    const d = moment(dateStr);
    if (d.isValid()) {
      time = createJsonResponse(d.toDate());
    }
  } else {
    const d = moment.unix(Number(dateStr));
    time = createJsonResponse(d.toDate());
  }

  response.json(time);
});

app.listen(port);
