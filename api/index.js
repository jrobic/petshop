const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

// Create new instance of express
const app = express();

// Config
const config = require('../config');
const env = process.env.ENV || 'development';

// Setup app
if (env === 'development') app.use(morgan('dev')); // log every request to console
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cors());
app.use(methodOverride());

// Models
const Animal = require('./models/Animal');

// Routes
const animalRouter = require('./routes/animal')(Animal);
app.use('/api/v1/animals', animalRouter);

app.use('/api/v1', express.static('doc'));


// Mongoose Connection
if (env !== 'test') {
  mongoose.connect(config[env].db);

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${config[env].db}`);
  });
}

module.exports = app;
