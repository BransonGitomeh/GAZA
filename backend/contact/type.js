var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'contact',
	description: 'this is a single contact',
	fields: () => ({
		id: {
			type: graphQl.GraphQLID
		},
		name: {
			type: graphQl.GraphQLString
		}
	})
})