var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./contact/queries").contact,
      contacts: require("./contact/queries").contacts

    }
  })
});

module.exports = schema;