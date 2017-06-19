var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write(`
	<!DOCTYPE html>
	<html>
	<head>
		<title>Page title</title>
	</head>
	<body>
		<p>First paragraph</p>
	</body>
	</html>
	`);
	res.end();
}).listen(3000);

console.log('Server running at http://localhost:3000');