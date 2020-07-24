var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

const port=8082; 
app.use(express.static(__dirname + '/')); //__dir and not _dir

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })
  
app.listen(port);
