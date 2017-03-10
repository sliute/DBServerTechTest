var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('dataStore on!');
});

app.listen(4000, function () {
  console.log('dataStore now on port 4000!');
});

var store = {};

app.post('/set', function(req, res) {
  var query = req.query;
  Object.keys(query).forEach(function(key) {
    store[key] = query[key];
  });
  res.status(200).end();
});

app.get('/get', function(req, res) {
  res.send(store[req.query.key]);
});

module.exports = app;
