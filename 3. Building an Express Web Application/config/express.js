var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function() {
	var app = express();
	
	var config = require('./config.js');
	var requiredConfig = config.require();
	if (config.param) {
		app.use(requiredConfig(config.param));
	} else {
		app.use(requiredConfig());
	}
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	require('../app/routes/index.server.routes.js')(app);
	return app;
};