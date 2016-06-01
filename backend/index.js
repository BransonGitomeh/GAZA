var express = require('express');
var app = express()

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send("welcome to projectExpresso");
});


//graph endpoint
var graphql = require("graphql")

var schema = require("./contact/graphSchema")

app.get('/graph', function (req, res) {
	var query = '{ hello }';

	graphql.graphql(schema, query).then(result => {

		// Prints
		// {
		//   data: { hello: "world" }
		// }
		console.log(result);

	});
});


app.listen(3000, function () {
	console.log('listening on *:3000');
});

