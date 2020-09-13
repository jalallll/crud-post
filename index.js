const express = require('express');

const path = require('path');

const connectDB = require('./DB/connection');
connectDB();

const app = express();

// check which port is free or use port 3000
const PORT = process.env.PORT || 3000;

// ejs templating engine
const ejs = require('ejs');
app.set('view engine', 'ejs');

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing database model
const Post = require('./DB/Models/post');

// look for static files in public directory
app.use(express.static('public'));

// start server and listen for connections on port 3000
app.listen(PORT, (req, res) => {
	console.log('Listening on port 3000');
});

// Routes
// .ejs file must be stored in views directory
app.get('/', async (req, res) => {
	const posts = await Post.find({});
	res.render('home', { posts: posts });
});
app.get('/create', (req, res) => {
	res.render('create');
});
app.post('/posts/new', async (req, res) => {
	await Post.create(req.body);
	res.redirect('/');
});
