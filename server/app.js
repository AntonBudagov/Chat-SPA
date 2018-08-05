let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let http = require('http');
// var index = require('./routes/index');
let authorize = require('./routes/authorize');
let users = require('./routes/user');
let messages = require('./routes/messages');

let app = express();


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


let connectionString = 'mongodb://localhost:27017/chat';
mongoose.Promise = global.Promise;
mongoose.connect(connectionString)
    .then(() => console.log('OK'))
    .catch((err) => console.log('Error'+ err));

app.use('/authorize', authorize);
app.use('/users', users);
app.use('/messages', messages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


let port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
const io = require('socket.io')(server);

server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);


io.on('connection', function (socket) {
    console.log('connection socket');

    socket.on('newMessage', () => {
        console.log('new message');
        io.emit('updateMessages', true)

    });

});


// io.on('connection', (socket) => {
//
//     console.log('user connected');
//
//     socket.on('disconnect', function() {
//         console.log('user disconnected');
//     });
//
//     socket.on('add-message', (message) => {
//         // io.emit('message', { type: 'new-message', text: message });
//         socket.emit('hello', {hello: 'world'});
//         io.emit('updateMessages', true);
//         // Function above that stores the message in the database
//         // databaseStore(message)
//     });
//
// });

module.exports = app;
