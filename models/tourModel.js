const mongoose = require('mongoose');

// to create a schema, we must call the schema method on a new instance of mongoose.
const tourModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must have a name 🫣'],
    unique: [true, 'You are Unique, so its your name!!!'],
  },
  price: {
    type: Number,
    required: [true, 'Name your Price'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model('Tour', tourModel); // turning our schema into a model.
mongoose.set('strictQuery', true);

module.exports = Tour;
