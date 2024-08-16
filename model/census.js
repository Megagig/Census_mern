const mongoose = require('mongoose');
//include a schema
const Schema = mongoose.Schema;

const Cschema = new Schema({
  city: {
    type: String,
    required: [true, 'city-state required'],
  },
  census: {
    type: Number,
    required: [true, 'census required'],
  },
});

//Create the model
const Census = mongoose.model('census', Cschema, 'census');

module.exports = Census;
