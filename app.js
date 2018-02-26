console.log('in app.js');
const request = require('request');

const express = require('express');
var app = express();

app.get('/', (req, res) =>{
  console.log('/ is called');
});

app.listen(3000);
