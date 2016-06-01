var express = require('express');
var app = express()

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("welcome to projectExpresso");
});


//graph endpoint
var graphql = require("graphql")


var schema = require("./graphSchema")

app.get('/graph', function (req, res) {
  var query = '{ contacts { id } }';

  graphql.graphql(schema, query).then(result => {
    console.log(result);
    res.send(result)
  });
});


app.listen(3000, function () {
  console.log('listening on *:3000');
});

