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

    socket.emit('newMessage',{
        from: 'Admin',
        text: 'Welcome to the chat app!',
        createdAt: new Date().getTime
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime
    })
    // socket.emit('newMessage', {
    //     from:'josh69',
    //     text:'Howdy',
    //     createdAt: 444
    // })
    //FROM SERVER TO CLIENT:
    //.emit creates an event, as the second argument we can put in data to be sent back
    //The event along with the data gets sent back to the server
    //socket.emit() emits to a single connection

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime

            //io.emit emits to every single connection
        });

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
        //.broadcast sends to everyone except one person
    })
    
});
//io.on let's you register an event listener


server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
//setting up the app on whichever port
