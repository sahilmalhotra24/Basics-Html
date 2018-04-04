/*var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=1997&month=september';
var q  = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);

var a = q.query;
console.log(a.month);
*/



/*var URL =  require('url').URL;
var myurl = new URL('http://www.example.com/foo?bar=1#main');
console.log(myurl.host);
*/
/*
var URL =  require('url').URL;
var myurl = new URL('http://www.example.com/foo?bar=1#main');
myurl.protocol = 'https';
myurl.search = '?newBar=2';
console.log(myurl.href);
*/


var fs = require('fs');
/*fs.writeFile('testfile.js', 'Hello world hi sahil !!' , function(err){
	if(err){
	console.log(err); }
		else
			console.log('Write operation complete');
	
})*/

/*
fs.appendFile('testfile.js', 'Hello world hi sahil !!' , function(err){
	if(err){
	console.log(err); }
		else
			console.log('Append operation complete');
	
})
*/
/*
fs.rename('testfile.js', 'testfile.js' , function(err){
	if(err){
	console.log(err); }
		else
			console.log('Rename operation complete');
	
})
*/

//Asynchronous - opening file 
/*(console.log('Going to open file');
fs.open('testfile.js', 'r+' , function(err,fd){
	if(err){
		return console.error(err);
	}
	else
		console.log('file opened successfully');
	
	
})
*/

//unlink

//truncate
fs.truncate('testfile1.js', '2' , function(){
	console.log('Truncate operation complete');
	
})
//copy file Not Working 
fs.copyFile('testfile.js', 'testfile1.js' , '10' , function(){
	console.log('Copy file operation complete');
	
})



/*
fs.readFile('testfile.js','utf-8',function(err,data){
	if(err)
		throw err;
	
	console.log(data);
})
*/



