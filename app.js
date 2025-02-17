var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var alunoRouter = require('./routes/aluno');
var profRouter  = require('./routes/prof');
var pergRouter  = require('./routes/perg');
var questRouter = require('./routes/quest');
var usersRouter = require('./routes/users');
var testeRouter = require('./routes/teste');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('db', path.join(__dirname, 'db'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',      indexRouter);
app.use('/aluno', alunoRouter);
app.use('/prof',  profRouter);
app.use('/perg',  pergRouter);
app.use('/quest', questRouter);
app.use('/users', usersRouter);
app.use('/teste', testeRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
