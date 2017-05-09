var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var load     = require('express-load');
var flash = require('express-flash');
var expressValidator = require('express-validator');
var moment =require('moment')

mongoose.connect('mongodb://localhost/imuniza',function(err){
	if(err){
		console.log("erro ao conectar no mongodb: "+err);
	}else{
		console.log("sucesso ao conectar no mongodb");
	}
});
var porta   = 3000;


//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(bodyParser.urlencoded({ etended: false }));
app.use(cookieParser());
app.use(session({
  secret :'sua-chave-secreta',
  saveUninitialized: true,
  resave: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());


//app.use('/', index);
//app.use('/users', users);



app.use(function(req, res, next){
  res.locals.session = req.session.usuario;
  res.locals.isLogged = req.session.usuario ? true : false;
    res.locals.moment   = moment;
    next();

});

load('models').then('controllers').then('routes').into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

app.listen(porta, function(){
    console.log('Servidor node js ativo na porta '+ porta);
  });

//module.exports = app;
