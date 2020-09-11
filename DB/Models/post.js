const mongoose = require('mongoose');

const post = new mongoose.Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	},
	datePosted: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = Post = mongoose.model('post', post);
