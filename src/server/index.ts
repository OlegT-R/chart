const app = require('express')()

import { HOST, PORT, PRECIPITATION_PATH, TEMPERATURE_PATH } from "../constants/server";

import precipitation from './mock/precipitation.json'
import temperature from './mock/temperature.json'

app.use(function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get(PRECIPITATION_PATH, (_: any, res: any) => {
  res.status(200).type('application/json')
  res.send(precipitation)
})

app.get(TEMPERATURE_PATH, (_: any, res: any) => {
  res.status(200).type('application/json')
  res.send(temperature)
})

app.listen(PORT, HOST, function () {
  console.log(`Server listens http://${HOST}:${PORT}`)
})
