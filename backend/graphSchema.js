var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./contact/graphType")
    }
  })
});

module.exports = schema;