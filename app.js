//var logger = require("./logger");
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cluster = require('cluster');
var http = require('http');
var session=require('express-session');
var numCPUs = require('os').cpus().length;
var routes = require('./routes/index');
var users = require('./routes/users');
var ajax=require ('./routes/ajax/ajaxdata');
var fs=require('fs');
var morgan = require('morgan');
//database connection file
db = require('./db');

var app = express();
var winston = require('winston');

/*logger.debug("Overriding 'Express' logger");
app.use(require('morgan')({ "stream": logger.stream }));*/

/*//create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

//setup the logger
app.use(morgan('combined', {stream: accessLogStream}));*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
	secret:'Top secret'
}));
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
//require('./routes/places')(app);
require('./routes/auth/user')(app);
require('./routes/ajax/ajaxdata')(app);

//require('./routes/signup/tsp')(app);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server={};

module.exports = app;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    // Workers can share any TCP connection
    // In this case its a HTTP server
    server = app.listen(3000, function() {
//    	var addr = server.address();
//        logger.info('server bound', {
//            port: addr.port,
//            address: addr.address
//        });
        console.log('Listening on port %d', server.address().port);
    }); 
    
//    server.on("error", function (err) {
//        logger.error("unknown server error", err);
//    });

}