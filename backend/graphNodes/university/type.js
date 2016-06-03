var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'university',
	description: 'This is a university, it is an institution that shall hold all other information. and is the root of all things',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString,
		},
		createdAt: {
			type: graphQl.GraphQLString,
		},
		updatedAt: {
			type: graphQl.GraphQLString,
		},
		courses:{
			type:new graphQl.GraphQLList(require("../course/type"))
		}	
	})
})