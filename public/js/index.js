var socket = io();
//Initiating the request by calling io();
//making a request from the client to the server to open up a web socket and keep
//that connection open
//We want to save it in a variable to listen for data from the server and send data to the server
socket.on('connect',function () {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: "jen334",
        text: "hey this is jen!"
    });
    //FROM CLIENT TO SERVER
    //Created a client side script that connects to the server and emits a create email event
});

socket.on('newMessage', function (message) {
//The data that accomapnies the event is what needs to be first provided in the callback function
    console.log('New message:', message.text);
    console.log('From:', message.from);
});
//Listening to a custom event is the same as implementing a built in event listener