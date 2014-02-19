var http = require("http");
var url = require('url');

http.createServer(function (request, response){
	var pathname = url.parse(request.url).pathname;
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	console.log("Request for + pathname + " received.");
	console.log("Values: " + query["foo"]);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello world!!");
	response.write("<br><br> Pathname is: " + pathname);
	response.end();
	
	}).listen(process.env.PORT || 8000);