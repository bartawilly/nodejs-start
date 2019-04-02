var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('this is string');
});
app.get('/profile/:id', function(req, res) {
    res.send('profile id is' + req.params.id);
});
app.listen(3000);