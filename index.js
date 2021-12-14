const express = require('express');
const app = express();
require('dotenv').config();
const myFirstController = require('./controllers/myFirstController');
const cors = require('cors');
const connect = require('./database/connect');
connect.createConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', myFirstController.helloworld);

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/time', require('./routes/1UserRoutes'));
app.use('/api/v1/fact', require('./routes/3UserRoutes'));
app.use('/api/v1/rand', require('./routes/4UserRoutes'));
app.use('/api/v1/multi', require('./routes/Ex2Routes'));
// app.use('/api/v1/movil', require('./routes/MovilRoutes'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`My first API running on port: ${process.env.PORT}`);
  });