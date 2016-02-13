var express = require('express');
var params = require('express-params')
var path = require('path');
var http = require('http');
var fs = require('fs');
var request = require('request');
var querystring = require('querystring');
var router = express();

params.extend(router);

router.use('/',express.static(path.resolve(__dirname, 'static')));

var server = http.createServer(router);
server.listen(process.env.PORT || 5000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
