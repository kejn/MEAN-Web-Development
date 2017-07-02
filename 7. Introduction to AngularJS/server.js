process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/* Load the mongoose module first to be able to use its schemas
   everywhere without the need to explicit load it. */
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
