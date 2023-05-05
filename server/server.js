const express = require('express');

const app = express();

// express demo
app.get('/', function(req, res) {
	res.send('hello world1')
})

app.get('/data', function(req, res) {
	res.json({
		name: 'zc',
		sex: 'man'
	})
})

app.listen(9092, function(req, res) {
	console.log('node server at 9092')
})