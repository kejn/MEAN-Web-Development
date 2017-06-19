exports.render = function (req, res) {
	var response = 'Hello World';
	if (req.query.id) {
		response = response.toUpperCase();
		if(req.query.id == 'hellNO') {
			response = 'Hell - no.';
		}
	}
	res.send(response);
};