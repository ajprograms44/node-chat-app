//Route of our app
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
//path helps with file and directory paths
//path.join() takes your partial paths and joins them together

const port = process.env.PORT || 3000;
//Sets up the port for heroku configuration

var app = express();
//starting up the express app

var server =  http.createServer(app);
var io = socketIO(server);
//These two lines of code allow us to add websocket functionality
//we can now use 'io' as our Web Sockets server, now we can do anything in terms of emitting
//or listening to events
//This is how communicate between the server and the client

app.use(express.static(publicPath));
//express middleware to serve up the static page

io.on('connection', (socket) => {
    console.log('User Connected');

    socket.on('disconnect', () => {
        console.log('User Disconnected')
    });
});
//io.on let's you register an event listener


server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
//setting up the app on whichever port
