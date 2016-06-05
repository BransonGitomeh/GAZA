var graphql = require("graphql")
var assert = require("assert")
var waterline = require("waterline")

//rest of the crud - the cud
var db;
require("../dbSchema")(function (err, models) {    
    if(models) console.log("connected to model")
    db = models.collections
})

module.exports = {
    create: {
        args: {
            id: {
                type: graphql.GraphQLString
            },
            name: {
                type: graphql.GraphQLString
            },
            number: {
                type: graphql.GraphQLString
            }
        },
        type: new graphql.GraphQLObjectType({
            name: 'createContact',
            description: 'this is a mutation to help directly a contact.',
            fields: () => ({
                id: {
                    type: graphql.GraphQLID
                },
                name: {
                    type: graphql.GraphQLString
                },
                createdAt:{
                    type: graphql.GraphQLString
                },
                updatedAt:{
                    type: graphql.GraphQLString
                }
            })
        }),
        resolve(root, args,variables) {
            return new Promise((resolve, reject) => {                
                console.log(variables)
                
                db.contact.create(variables).exec(function (err, contact) {
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