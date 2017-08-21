var http = require("http");
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8080);

http.createServer(function (request, response) {
   // Get the version
   var version = process.env.VERSION || development;
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end(`Hello World. This is version ${version} \n`);
}).listen(app.get('port'));

// Console will print the message
console.log('Server running at http://127.0.0.1/');
