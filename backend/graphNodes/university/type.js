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
		},
		levels:{
			type:new graphQl.GraphQLList(require("../level/type"))
		},
		level_stages:{
			type:new graphQl.GraphQLList(require("../level_stage/type"))
		},
		study_modes:{
			type:new graphQl.GraphQLList(require("../study_mode/type"))
		},
		semesters:{
			type:new graphQl.GraphQLList(require("../semester/type"))
		},
		payment_channels:{
			type:new graphQl.GraphQLList(require("../payment_channel/type"))
		}
	})
})