const express = require('express');
const app = express();
const myFirstController = require('./controllers/myFirstController');

app.get('/', myFirstController.helloworld);

app.listen(3000, () => {
  console.log('My first API running!!!!');
  });