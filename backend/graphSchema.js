var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  // READS
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./contact/queries").contact,
      contacts: require("./contact/queries").contacts,
      
      student: require("./student/queries").student,
      students: require("./student/queries").students
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
            contact: require("./contact/mutations").create,
            student: require("./student/mutations").create
          }
        }),
        resolve:function(){return false}
      }
      
    }
  })
});

module.exports = schema;