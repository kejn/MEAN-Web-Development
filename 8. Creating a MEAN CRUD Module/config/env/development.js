module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'superSecretDevString',
	facebook: {
		clientID: 'Application ID', // replace me
		clientSecret: 'Application secret', // replace me
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: 'Application ID', // replace me
		clientSecret: 'Application secret', // replace me
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};