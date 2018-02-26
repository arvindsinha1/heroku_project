console.log('in app.js');
const request = require('request');

const express = require('express');
var app = express();
var port = process.env.port || 3000 ;
console.log(process.env.port, 'port');

app.get('/', (req, res) =>{
  console.log('/ is called');
});

app.get('/favicon.ico', (req, res) =>{
  console.log('/favicon.ico is called');
});

app.listen(port);
