var graphql = require("graphql")

var type = new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: graphql.GraphQLString,
            resolve() {
                return 'world';
            }
        }
    }
})

module.exports = type;