var express = require('express');
var app = express()
var graphql = require("graphql")
var schema = require("./graphSchema")
var bodyParser = require('body-parser');

app.use(express.static('graphiql'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
		if ('OPTIONS' == req.method) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,PATCH,OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,Content-Length,X-Requested-With");
      res.sendStatus(200)
		} else {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,PATCH,OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,Content-Length,X-Requested-With");
      next();
		}
})

app.get('/', function (req, res) {
  res.send("welcome to projectExpresso");
});


//graph endpoint
app.post('/graph', function (req, res) {
  const query = req.body.query
  const variables = req.body.variables ? JSON.parse(req.body.variables) : ""

  graphql.graphql(schema, query, null, variables).then(result => {
    console.log(result)
    res.send(result)
  });
});


app.listen(4000, function () {
  console.log('listening on *:4000');
});

require("./graphNodes/batchJobs")()



