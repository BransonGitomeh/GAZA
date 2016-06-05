var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'member',
	description: 'this is a single contact',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString
		},
		number: {
			type: graphQl.GraphQLString
		}
	})
})