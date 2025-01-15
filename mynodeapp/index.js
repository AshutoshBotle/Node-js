var express = require('express');

var app = express(); // Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
  res.send('changed nor');
}); 

// Listen on all interfaces (0.0.0.0) and default port 3000
app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
  console.log('Server is running on port 3000');
});

module.exports = app;
