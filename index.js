var express = require('express');

var app = express();

app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});


app.post('/login', function(req,res) {
	console.log('Login successful');
});

app.get('/queryProducts',function(req,res) {
	
	res.json([{name: 'android'}, {name: 'Asus'}]);
});


var port = process.env.PORT;
app.listen(port, function() {
	console.log("Server is listening on port 80");
});