var express = require('express');
var app = express()
var graphql = require("graphql")
var schema = require("./graphSchema")


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("welcome to projectExpresso");
});


//graph endpoint
app.post('/graph', function (req, res) {
  var singleQuery = '{ contact(id:"295") { name } }';
  var rangeQuery = '{ contacts { id } }';

  var createContactMutation = 'mutation { create { contact(name:"Branson Gitomeh") { name } } }';

  graphql.graphql(schema, createContactMutation).then(result => {
    console.log(result);
    res.send(result)
  });
});


app.listen(3000, function () {
  console.log('listening on *:3000');
});



