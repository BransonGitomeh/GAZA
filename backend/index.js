var express = require('express');
var app = express()
var graphql = require("graphql")
var schema = require("./graphSchema")
var bodyParser  = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("welcome to projectExpresso");
});


//graph endpoint
app.post('/graph', function (req, res) {
  var singleQuery = '{ contact(id:"295") { name } }';
  var rangeQuery = '{ contacts { id } }';

  var createContactMutation = 'mutation { create { contact(name:"Branson Gitomeh") { name } } }';
  
  console.log(req.body.query)
  
  const query = req.body.query

  graphql.graphql(schema, query).then(result => {
    console.log(result);
    res.send(result)
  });
});


app.listen(3000, function () {
  console.log('listening on *:3000');
});



