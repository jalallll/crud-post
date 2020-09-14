const mongoose = require('mongoose');

const post = new mongoose.Schema({
	userName: String,
	title: String,
	body: String,
	datePosted: {
		type: Date,
		default: new Date(),
	},
	image: String,
});

module.exports = Post = mongoose.model('post', post);
