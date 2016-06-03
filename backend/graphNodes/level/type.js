var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'level',
	description: 'ie IT that is then divided into diploma and the rest of the levels, ',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString,
		},
		student: {
			type: new graphQl.GraphQLList(require("../student/type"))
		}
	})
})