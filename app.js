// ES6 should be enabled
// to start it ‘sudo npm start’

import createError from 'http-errors';
import express from 'express';
import reload from 'reload';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set up controller
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/about'));
app.use(require('./routes/users'));
app.use(require('./routes/products'));

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

app.set('port', process.env.PORT || 80);

const server = app.listen(app.get('port'),
		(req, res) => {console.log('Listening on port ' + app.get('port'));}
		     );

reload(server,app);

module.exports = app;


//DEBUG=valleysports-expressjs:* npm start
