const express = require('express');
const Router = express.Router();



Router.get('/', (req, res)=>
{
    obj = 
    {
        name : lakshya,
        age : 21
    },
    res.json(obj)
})


module.exports = Router