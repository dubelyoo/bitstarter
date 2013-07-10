var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var myBuffer;

  fs.readFileSync('index.html', function (err, data) {
    if (err) {
       myBuffer = new Buffer("Error reading from file...");
    }
    myBuffer = new Buffer(data);
  }

  response.send(myBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
