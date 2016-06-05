var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'payment_channel',
	description: 'ie IT that is then divided into diploma and the rest of the levels, ',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},

		channel_name: {
			type: graphQl.GraphQLString,
		},
		channel_number: {
			type: graphQl.GraphQLString,
		},
		location: {
			type: graphQl.GraphQLString,
		},
		
		university: {
			type: require("../university/type"),
		}
	})
})