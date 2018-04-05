var lc = require('lower-case');
var sol = require('./example.js');
//var uc = require('upper-case');
//var lcf = require('lower-case-first');
var fs = require('fs');
var http = require('http');


var url = require('url');
var adr = 'http://localhost:8081/default.htm?year=1997&month=september';


http.createServer(function (req,res){
	
	console.log("Listening to port 8081");
	
	
	fs.readFile('example.js','utf-8',function(err,data){
	if(err)
	{
		console.log("error");
	
	}
	else
	{
		
	res.write(data);
	}	
res.end();
});

		var q  = url.parse(adr,true);
res.write(q.host);
res.write('<br>')
res.write(q.pathname);

var a = q.query;
res.write(a.month);



	
}).listen(8081);






