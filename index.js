"use strict";

const express = require('express');
const strftime = require('strftime')
const chrono = require('chrono-node')

const createJsonResponse = require('./createJsonResponse');


const app = express();

// let Heroku set the port
const port = process.env.PORT || 8080;

app.get('/:date', (request, response) => {
  const dateStr = request.params.date;

  let dateObj;
  let time = {natural: null, unix: null};
  
  if (isNaN(dateStr)) {
    dateObj = chrono.parse(dateStr);
    if (dateObj.length > 0) {
      let d = dateObj[0].start.date();
      d.setHours(0, 0, 0, 0);  // force time to 12 am

      time = createJsonResponse(d);
    }
  } else {
    dateObj = new Date(parseInt(dateStr) * 1000);
    time = createJsonResponse(dateObj);
  }

  response.json(time);
});

app.listen(port);
