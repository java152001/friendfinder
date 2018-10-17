var express = require('express');
var path = require('path');
var fs = require('fs');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

var app = express();
var PORT = process.env.PORT || 3805;

app.use('', htmlRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });