var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'member',
	description: 'this is a single contact',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		names: {
			type: graphQl.GraphQLString
		},
		DOB: {
			type: graphQl.GraphQLString
		},
		other_details: {
			type: graphQl.GraphQLString
		}
	})
})