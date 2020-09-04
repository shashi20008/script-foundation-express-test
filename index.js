const express = require('express');

const app = express();

app.use(function(req, res, next) {
  console.log(`Got request for: ${req.path}`);
  next();
});

app.get('/search', function(req, res) {
  res.end('Search for something');
});

app.get('/news', function(req, res) {
  res.end('I dont have any interesting news right now.');
});

app.get('*', function(req, res) {
  res.send('Not Found!');
});

app.listen(7000);
