var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req,res){
console.log('url '+ req.url );
res.writeHead(200, {'Content-Type':'text/html'});

var readStream = fs.createReadStream('./index.html');
readStream.pipe(res);

});

server.listen(3000, '127.0.0.1');

console.log('you are listening to por 3000');
