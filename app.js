const express = require('express');
const morgan = require('morgan');
const app = express(); // initiating an instance of express
const tourRouter = require('./routers/tourRoute');

app.use(express.json()); // consuming the body parser middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // consuming morgan middleware
}

app.use(express.static('public')); // this middleware gives us access to our static files.

app.use((req, res, next) => {
  console.log('Hey from the middleware💃🏾🎊');
  next();
}); // greetings from our customized middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
}); // customizing a date middleware for our requests

app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app;
