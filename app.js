var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(7911, function() {
	console.log('Express server listening on port ' + server.address().port);
});
