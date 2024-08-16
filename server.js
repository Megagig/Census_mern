//create the mongoose object
const mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017';

//connect to the database
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get the connection object
var db = mongoose.connection;

//Check for connection success
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.log.bind(console, 'MongoDB connected successfully'));

// express
const express = require('express');
const app = express();
//Define our port
const port = 8081;

// Tell the incoming request where to go to find the data and the format used
app.use(express.json());
app.use('/api', require('./route/request'));

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
