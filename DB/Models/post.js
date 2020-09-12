const mongoose = require('mongoose');

const post = new mongoose.Schema({
	title: String,
	body: String,
});

module.exports = Post = mongoose.model('post', post);
