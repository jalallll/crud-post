const mongoose = require('mongoose');

const URI =
	'mongodb+srv://jalal:jalal1234@cluster0.laj3q.mongodb.net/Forum?retryWrites=true&w=majority';

const connectDB = async () => {
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	console.log('Database has been connected');
};

module.exports = connectDB;

//npm run server
