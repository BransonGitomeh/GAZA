var express = require('express');
var app = express()
var graphql = require("graphql")
var schema = require("./graphSchema")
var bodyParser  = require('body-parser');

app.use(express.static('graphiql'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("welcome to projectExpresso");
});


//graph endpoint
app.post('/graph', function (req, res) {
  // var singleQuery = '{ contact(id:"295") { name } }';
  // var rangeQuery = '{ contacts { id } }';
  // var createContactMutation = 'mutation { create { contact(name:"Branson Gitomeh") { name } } }';
  // console.log(req.body.variables)
  
  const query = req.body.query
  const variables = req.body.variables ? JSON.parse(req.body.variables) : ""

  graphql.graphql(schema, query, null, variables).then(result => {
    console.log(result)
    res.send(result)
  });
});


app.listen(3000, function () {
  console.log('listening on *:3000');
});



