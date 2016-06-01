var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  query: require("./graphType")
});

module.exports = schema;