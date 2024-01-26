const mongoose = require('mongoose');

const connectTomongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/iNotebook', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectTomongo;



//earlier I tried conncting to mongo using call back function but the newer version does niot connect to mongo using arrow function so I connected it usiong await/await syntax
//async/await is a syntax that deals with promises