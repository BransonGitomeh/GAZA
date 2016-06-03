var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'unit',
	description: 'ie IT that is then divided into diploma and the rest of the levels, ',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString,
		},
		prices: {
			type: new graphQl.GraphQLList(require("../price/type")),
		}
	})
})