var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(3000);
console.log('server is running at "http://localhost:3000"');