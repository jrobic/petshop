const app = require('./api/index');

const config = require('./config');
const env = process.env.ENV || 'development';
const port = process.env.PORT || config[env].port;

// Start express application
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`App listening on port ${port}`);
});

