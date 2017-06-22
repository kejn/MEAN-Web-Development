var express = require('express');

var hasName = function(req, res, next) {
	if (req.params.name) {
		next();
	} else {
		res.send('What is your name?');
	}
};

var sayHello = function(req, res, next) {
	res.send('Hello ' + req.params.name);
}

var app = express();
app.get('/', hasName, sayHello);

app.listen(3000);
console.log('Server running at http://localhost:3000/');
