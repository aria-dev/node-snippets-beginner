var http = require('http');
var date = require('./module')

http.createServer(function (request, response) {
    response.writeHead(200, "OK", { "content-type": "text/html" });
    response.write("Today is " + date.mydatetime());
    response.end("<br><hr>Hello World!");
}).listen(8080);