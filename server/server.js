//Route of our app
const path = require('path');
const publicPath = path.join(__dirname, '../public');
//path helps with file and directory paths
//path.join() takes your partial paths and joins them together
const express = require('express');

const port = process.env.PORT || 3000;
//Sets up the port for heroku configuration

var app = express();
//starting up the express app

app.use(express.static(publicPath));
//express middleware to serve up the static page

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
//setting up the app on whichever port
