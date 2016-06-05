var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'department',
	description: 'ie IT that is then divided into diploma and the rest of the levels, ',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString,
		},
		school: {
			type: require("../school/type"),
		},
		units: {
			type: new graphQl.GraphQLList(require("../unit/type"))
		}
	})
})