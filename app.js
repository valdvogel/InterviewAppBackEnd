const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Set up mongoose connection
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://localhost:27017/post';

// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// body
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//route
const post = require('./routes/post.route'); 
app.use('/post', post);


let port = 4000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});