var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// For logging
app.use(logger('dev'));
app.use(express.json());
// to allow to read request.body
app.use(express.urlencoded({ extended: false }));
// Parse cookies
app.use(cookieParser());
// Expose public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
