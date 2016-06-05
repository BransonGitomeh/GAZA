var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'event',
	description: 'this is a single contact',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString
		},
		date: {
			type: graphQl.GraphQLString
		},
		other_details: {
			type: graphQl.GraphQLString
		}
	})
})