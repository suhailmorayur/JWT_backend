const mongoose = require('mongoose');

const singupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String
  });

  const Singup = mongoose.model('Singup', singupSchema);


  module.exports = Singup