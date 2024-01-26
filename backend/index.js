const connectTomongo = require('./db');
const express = require('express');
connectTomongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello lakshya')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

