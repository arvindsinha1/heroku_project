console.log('in app.js');
const request = require('request');

const express = require('express');
var app = express();
var port = process.env.port || 3000 ;

app.get('/', (req, res) =>{
  console.log('/ is called');
});

app.listen(process.env.port);
