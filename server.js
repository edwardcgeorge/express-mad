// grab express
var express = require('express');
// create an express app
var app = express();
app.use(express.static(__dirname));
app.get('/', function(req, res) {
res.sendFile('bundle.js', { root: __dirname });
});
// http://localhost:8080/
app.listen(8080);
