const mongoose = require('mongoose');
const Userschema = new Schema({
    name:
    {
        type: String,
        required: true //this will ensure that this field is required amd you cannot procede further without this field
    },
    email:
    {
        type: String,
        required: true, //this will ensure that this field is required amd you cannot procede further without this field
        unique : true
    },
    password:
    {
        type: String,
        required: true //this will ensure that this field is required amd you cannot procede further without this field
    },
    date:
    {
        type: Date,
        default : Date.now
    },
  });

  module.exports = mongoose.model('User', Userschema)