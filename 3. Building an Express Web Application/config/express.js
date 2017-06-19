var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function() {
	var app = express();
	
	var config = require('./config.js');
	if (config.param) {
		app.use(config.require()(config.param));
	} else {
		app.use(config.require()());
	}
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	require('../app/routes/index.server.routes.js')(app);
	return app;
};