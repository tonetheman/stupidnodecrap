
var express = require('express');
var bodyParser = require('body-parser');
var util = require("util");

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.post("/", function(req,res) {
	
	console.log(util.inspect(req));
	console.log("BODY", req.body);
	console.log("typeof body", typeof(req.body));
	console.log("_body",req._body);
	var b = req.body;
	console.log("testing",b.a);
	res.send("hi " + new Date());
});


var server = app.listen(8000, function() {
	console.log("started on port 8000");
});