const express = require('express');

const app = express();
const cors= require('cors');

const PORT = require('./configs/index').port;
const API_ROUTE = require('./routes/api.route.js');


app.use(cors()); //allow everything
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// })); 
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


const clients = require('./configs/clientsStats');



app.use('/message/send', function (req, res, next) {
    io.emit('broadcast', {
        'clients': clients
    });
    next();
});
app.use('/message/delete', function (req, res, next) {
    io.emit('broadcast', {
        'clients': clients
    });
    next();
});

app.use( API_ROUTE);


app.use( function(req, res, next){

    next({
        status: 404,
        msg: '404 Not Found'
    });
});
app.use(function (err, req, res, next) {
    res.status(err.status || 400).json({
        msg: err.msg || "Error",
        err: err
    })
});
const server = app.listen(PORT || 3000, function () {
    console.log("Server listening at port ", PORT || 3000);
});


const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', (socket, user) => {
    console.log('Client connected to socket: ' + socket.id);
    // console.log(socket.handshake.query);
    clients.active++;

    if (!clients.users.some(user => user.userId === socket.handshake.query.userId)) {
        clients.users.push({
            'socketId': socket.id,
            'userName': socket.handshake.query.userName,
            'userId': socket.handshake.query.userId
        });
    }

    io.emit('broadcast', {
        'clients': clients
    });
    socket.on("disconnect", () => {
        console.log('Client disconnected to socket: ' + socket.id);
        clients.active--;
        clients.users =clients.users.filter( user => {
            return user.socketId !== socket.id
        });
        console.log(clients.users);
        io.emit('broadcast', {
            'clients': clients
        });
    })
})


// io.sockets.on('newMessage' ,socket => {
//     io.emit('broadcast');
//     console.log("New Message!");
// })


// io.sockets.on('newMessage', socket => {
//     io.sockets.emit('newMessage');
// })
