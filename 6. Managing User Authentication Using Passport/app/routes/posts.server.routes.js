var posts = require('../controllers/posts.server.controller');

module.exports = function(app) {
	app.route('/posts')
		.get(posts.list)
		.post(posts.create);
};