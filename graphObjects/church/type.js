var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'church',
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
		},
		events: {
			type: new graphQl.GraphQLList(require("../event/type"))
		},
		members: {
			type: new graphQl.GraphQLList(require("../member/type"))
		},
		messages: {
			type: new graphQl.GraphQLList(require("../message/type"))
		}
	})
})