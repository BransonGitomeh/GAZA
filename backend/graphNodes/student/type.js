var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'student',
	description: 'This are all the details of a student, and his relations to other entities',
	fields: () => ({
		id: {
			type: graphQl.GraphQLString
		},
		s_a: {
			type: graphQl.GraphQLString,
		},
		regNo: {
			type: graphQl.GraphQLString,
		},
		names: {
			type: graphQl.GraphQLString,
		},
		DOB: {
			type: graphQl.GraphQLString,
		},
		Gender: {
			type: graphQl.GraphQLString,
		},
		nationality: {
			type: graphQl.GraphQLString,
		},
		id_passport: {
			type: graphQl.GraphQLString,
		},
		maritalStatus: {
			type: graphQl.GraphQLString,
		},
		contacts: {
			type: graphQl.GraphQLString,
		},
		hometown: {
			type: graphQl.GraphQLString,
		},
		email: {
			type: graphQl.GraphQLString,
		},
		qualification: {
			type: graphQl.GraphQLString,
		},
		grade: {
			type: graphQl.GraphQLString,
		},
		teachingExperience: {
			type: graphQl.GraphQLString,
		},
		sponcership: {
			type: graphQl.GraphQLString,
		},
		disabled: {
			type: graphQl.GraphQLString,
		},
		studymode: {
			type: graphQl.GraphQLString,
		},
		course: {
			type: require("../course/type"),
		},
		level: {
			type: require("../level/type"),
		},
		level_stage: {
			type: require("../level_stage/type"),
		}

	})
})