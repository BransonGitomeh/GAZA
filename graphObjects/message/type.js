var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'message',
	description: 'this is a single contact',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		member: {
			type: require("../member/type")
		},
		timeReceived: {
			type: graphQl.GraphQLString
		},
		message: {
			type: graphQl.GraphQLString
		}
	})
})