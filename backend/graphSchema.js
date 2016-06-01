var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  // READS
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./contact/queries").contact,
      contacts: require("./contact/queries").contacts

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
            contact: require("./contact/mutations").create
          }
        }),
        resolve:function(){return false}
      }
      
      //all mutations involving an update of an entity
      // update: {
      //   type: new graphql.GraphQLObjectType({
      //     name: 'RootUpdateType',
      //     fields: {
      //       contact: require("./contact/mutations").create
      //     }
      //   })
      // },
      
      //all mutations involving a deletion
      // delete: {
      //   type: new graphql.GraphQLObjectType({
      //     name: 'RootDeleteType',
      //     fields: {
      //       contact: require("./contact/mutations").create
      //     }
      //   })
      // }
    }
  })
});

module.exports = schema;