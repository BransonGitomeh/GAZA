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
            university:{
                type: graphQl.GraphQLString,
            },
            channel_name: {
                type: graphQl.GraphQLString,
            },
            channel_number: {
                type: graphQl.GraphQLString,
            },
            location: {
                type: graphQl.GraphQLString,
            }
        },
        type: new graphQl.GraphQLObjectType({
            name: 'createPayment_channel',
            description: 'This is a mutation to help directly create a course. and only returns the id of the new course that has been created',
            fields: () => ({
                id: {
                    type: graphQl.GraphQLID
                }
            })
        }),
        resolve(root, args, variables) {
            return new Promise((resolve, reject) => {
                console.log(variables)

                db.payment_channel.create(variables).exec(function (err, contact) {
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