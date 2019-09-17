var express = require('express');
var path = require('path');


//express server
var app = express();

//initial port
var PORT = process.env.PORT || 8080;

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


//LISTENER
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

