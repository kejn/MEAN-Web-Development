var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
	console.log(req.method, req.url);
	next();
};

var helloWorld = function(req, res, next) {
	res.setHeader("Content-Type", 'text/plain');
	res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
	res.setHeader("Content-Type", 'text/plain');
	res.end('Goodbye World');
};


/*
 * The order of use() is important!
 * E.g. if 'logger' is added later it will not work,
 * because res.end() is already called in 'hello'/'goodbye'.
 */
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000');