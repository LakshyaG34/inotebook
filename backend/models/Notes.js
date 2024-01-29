const mongoose = require('mongoose');
const Notesschema = new Schema({
    title:
    {
        type: String,
        required: true //this will ensure that this field is required amd you cannot procede further without this field
    },
    desciption:
    {
        type: String,
        required: true, //this will ensure that this field is required amd you cannot procede further without this field
        unique : true
    },
    tag:
    {
        type: String,
        deafult : "general"
    },
    date:
    {
        type: Date,
        default : Date.now
    },
  });

  module.exports = mongoose.model('User', Notesschema)