var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  // READS
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      church: require("./graphObjects/church/queries").church,
      member: require("./graphObjects/member/queries").member,
      event: require("./graphObjects/member/queries").member,
      message: require("./graphObjects/message/queries").message,
      ministry: require("./graphObjects/message/queries").message,
      page: require("./graphObjects/page/queries").page,
    }
  }),

  // Mutation Create
  mutation: new graphql.GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      // all create mutation types
      create: {
        type: new graphql.GraphQLObjectType({
          name: 'RootCreationType',
          fields: {
            church: require("./graphObjects/church/mutations").create,
            member: require("./graphObjects/member/mutations").create,
            event: require("./graphObjects/member/mutations").create,
            message: require("./graphObjects/message/mutations").create,
            ministry: require("./graphObjects/message/mutations").create,
            page: require("./graphObjects/page/mutations").create,
          }
        }),
        resolve: function () { return false }
      }

    }
  })
});

module.exports = schema;