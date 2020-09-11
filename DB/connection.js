const mongoose = require('mongoose');

const URI =
	'mongodb+srv://jalal:jalal1234@cluster0.laj3q.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
	await mongoose.connect(URI);
	console.log('Database has been connected');
};

module.exports = connectDB;
