var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  // READS
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./graphNodes/contact/queries").contact,
      contacts: require("./graphNodes/contact/queries").contacts,
      
      student: require("./graphNodes/student/queries").student,
      students: require("./graphNodes/student/queries").students,
      
      university: require("./graphNodes/university/queries").university,
      universities: require("./graphNodes/university/queries").universities,
      
      course: require("./graphNodes/course/queries").course,
      courses: require("./graphNodes/course/queries").courses

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
            contact: require("./graphNodes/contact/mutations").create,
            student: require("./graphNodes/student/mutations").create,
            university: require("./graphNodes/university/mutations").create,
            course: require("./graphNodes/course/mutations").create,
            level: require("./graphNodes/level/mutations").create,
            level_stage: require("./graphNodes/level_stage/mutations").create,
            study_mode: require("./graphNodes/study_mode/mutations").create,
            payment_channel: require("./graphNodes/payment_channel/mutations").create,
            semester: require("./graphNodes/semester/mutations").create,
            school: require("./graphNodes/school/mutations").create,
            department: require("./graphNodes/department/mutations").create,
            unit: require("./graphNodes/unit/mutations").create,
            price: require("./graphNodes/price/mutations").create

          }
        }),
        resolve:function(){return false}
      },
      
      update: {
        type: new graphql.GraphQLObjectType({
          name: 'RootUpdateType',
          fields: {
            university: require("./graphNodes/university/mutations").update,
          }
        }),
        resolve:function(){return false}
      },
      
      delete: {
        type: new graphql.GraphQLObjectType({
          name: 'RootDeleteType',
          fields: {
            university: require("./graphNodes/university/mutations").delete,
          }
        }),
        resolve:function(){return false}
      }
      
    }
  })
});

module.exports = schema;