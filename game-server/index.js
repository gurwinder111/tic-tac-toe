var express = require('express');
var socket = require('socket.io');
//Server Setup
var app = express();
var port = 8000;
var server = app.listen(port,()=> {
    console.log('listenig port '+port);
});

//Static Files
app.use(express.static('public'));

// Socket Setup
var io = socket(server);

io.on('connection', (socket)=>{
    console.log('socket connection made');
    socket.on('move',( squares, xIsNext ,i)=>{
        // io.socket.emit('move')
        // console.log("data=>>>>>>");
        console.log(squares);
        xIsNext = !xIsNext;
        io.sockets.emit('move', {squares, xIsNext,i});
    })
});