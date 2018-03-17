var express = require('express');
var converter = require('..');

var app = express();

app.get('/api/toF/:temperature', function (req, res) {
  var temperature = req.params.temperature;
  var convertedTemperature = converter.toF(temperature);
  res.send(200, convertedTemperature);
});

app.get('/api/toC/:temperature', function (req, res) {
  var temperature = req.params.temperature;
  var convertedTemperature = converter.toC(temperature);
  res.send(200, convertedTemperature);
});

app.listen(3000, function (err) {
  if (err) return console.err(err);
  console.log('Listening on port 3000');
});
