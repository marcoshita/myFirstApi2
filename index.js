const express = require('express');
const app = express();
require('dotenv');
const myFirstController = require('./controllers/myFirstController');

app.get('/', myFirstController.helloworld);

app.use('/api/v1/user', require('./routes/userRoutes'));

app.listen(process.env.PORT || 3000, () => {
  console.log('My first API running!!!!');
  });