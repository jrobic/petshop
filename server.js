const express = require('express');
// const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Create new instance of express
const app = express();

// Config
const config = require('./api/config');

// Setup app
app.use(morgan('dev')); // log every request to console
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json
app.use(methodOverride);

// Mongoose Connection
// mongoose.connect(config.db);

// mongoose.connection.on('connected', () => {
//   console.log(`Mongoose default connection open to ${config.db}`);
// });

// Express application
app.listen(config.port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`App listening on port ${config.port}`);
});
