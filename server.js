//create the mongoose object
const mongoose = require('mongoose');
var mongoDB = 'mongoDB://127.0.0.1/censusdb';

//connect to the database
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get the connection object
var db = mongoose.connection;
