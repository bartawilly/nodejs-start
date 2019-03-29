var http = require('http');

var fs = require('fs');

var readStream = fs.createReadStream('./readMe.txt');
var writeStream =  fs.createWriteStream('./writeMe.txt');

readStream.on('data',function(chunk){
    
    console.log('chunk received:');
    writeStream.write(chunk);
});


/*
var server = http.createServer(function(req,res){
console.log('url '+ req.url );
res.writeHead(200, {'Content-Type':'text/plain'});
res.end('hey man!');
});

server.listen(3000, '127.0.0.1');

console.log('you are listening to por 3000');
*/