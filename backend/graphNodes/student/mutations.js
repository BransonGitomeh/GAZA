var graphQl = require("graphql")
var assert = require("assert")
var waterline = require("waterline")

//rest of the crud - the cud
var db;
require("../../dbSchema")(function (err, models) {
    if (models) console.log("connected to model")
    db = models.collections
})

module.exports = {
    create: {
        args: {
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
            sponsership: {
                type: graphQl.GraphQLString,
            },
            disabled: {
                type: graphQl.GraphQLString,
            },
            studymode: {
                type: graphQl.GraphQLString,
            },
            course: {
                type: graphQl.GraphQLString,
            }
        },
        type: new graphQl.GraphQLObjectType({
            name: 'createStudent',
            description: 'This is a mutation to help directly a contact. and only returns the id of the new student that has been created',
            fields: () => ({
                id: {
                    type: graphQl.GraphQLID
                }
            })
        }),
        resolve(root, args, variables) {
            return new Promise((resolve, reject) => {
                console.log(variables)

                db.student.create(variables).exec(function (err, contact) {
                    assert.ifError(err)
                    console.log(contact)
                    resolve(contact)
                })
            })
        }
    }
    // update:
    // delete:
}