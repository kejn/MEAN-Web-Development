var Post = require('mongoose').model('Post');
var User = require('mongoose').model('User');
var users = require('./users.server.controller');

exports.create = function(req, res, next) {
	var post = new Post(req.body);
	var user = post.author;
	
	if (!user) {
		console.log('User was not provided. Creating new User');
		user = new User({
			username: "anonymous user"
		});
	}
	
	user.save(function(err) {
		if(err) {
			return next(err);
		} else {
			console.log('...Saved!');
			post.author = user._id;
			post.save(function(err) {
				if(err) {
					return next(err);
				} else {
					res.json(post);
				}
			});
		}
	});
};

exports.list = function(req, res, next) {
	Post.find().populate('author').exec(function(err, posts) {
		if(err) {
			return next(err);
		} else {
			res.json(posts);
		}
	});
};