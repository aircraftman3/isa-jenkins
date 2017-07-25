var http = require('http');
var fs = require('fs');
var dt = require('./datemod');

http.createServer(function (req, res) {
  fs.readFile('first.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write("It is now: " + dt.getDate());
    res.end();
  });
}).listen(4000);

