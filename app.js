const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mongo = require('mongodb');   

const index = require('./routes/index');
const contact = require('./routes/contact');
const user = require('./routes/user');
const faq = require('./routes/faq');
const gallery = require('./routes/gallery');
const shop = require('./routes/shop');
const register = require('./routes/register');
const login = require('./routes/login');


const MongoClient = require('mongodb').MongoClient;

let URL = 'mongodb://localhost:27017/mydatabase';


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/gallery', gallery);
app.use('/faq', faq);
app.use('/users/:user', user);
app.use('/contact', contact);
app.use('/shop', shop);
app.use('/register', register);
app.use('/login', login);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
