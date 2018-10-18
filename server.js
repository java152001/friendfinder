var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser')
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

var app = express();
var PORT = process.env.PORT || 3805;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });