
var http = require('http');

var options = {
	method : "POST",
	path : "/",
	host : "127.0.0.1",
	port : 9000,
	headers : {}
};

// this does not
//var body = JSON.stringify({ a : 10 });
var body = "a=10"; // this works
options.headers['Content-Type'] = "application/x-www-form-urlencoded";
options.headers['Content-Length'] = body.length;


var responseBody = "";

var proxy_request = http.request(options, function(res) {
	res.on("data", function(chunk) {
		responseBody += chunk;
	});
	res.on("end", function() {
		console.log("end of response here:", responseBody);
	});
});

proxy_request.write(body,"binary");
proxy_request.end();