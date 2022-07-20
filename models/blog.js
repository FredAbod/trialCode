const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    WhiteColour: Boolean,
    email: String,
    // occupation: String,
  });

  const data = mongoose.model("data", BlogSchema);

 module.exports = data;