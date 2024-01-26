const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"


const connectTomongo = () =>
{
    mongoose.connect(mongoURI, ()=>
    {
        console.log("connected to mongo succesfully")
    }) //The arrow function inside mongoose.connect is called call-back function and the same can be done using async-await function
}

module.exports = connectTomongo;