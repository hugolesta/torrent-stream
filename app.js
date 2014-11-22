var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
app.listen(5050);

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));// log every request to the console
    app.use(express.bodyParser());// pull information from html in POST
});

app.get('/', function (req, res) {
	res.render('index')
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port 5050");
});
