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
            name: {
                type: graphQl.GraphQLString,
            }
        },
        type: new graphQl.GraphQLObjectType({
            name: 'createUniversity',
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

                db.university.create(variables).exec(function (err, contact) {
                    assert.ifError(err)
                    console.log(contact)
                    resolve(contact)
                })
            })
        }
    },
    update: {
        args: {
            id: {
                type: graphQl.GraphQLString,
            },
            name: {
                type: graphQl.GraphQLString,
            }
        },
        type: new graphQl.GraphQLObjectType({
            name: 'updateUniversity',
            description: 'This is a mutation to help directly modify a university`s name and other properties',
            fields: () => ({
                id: {
                    type: graphQl.GraphQLID
                }
            })
        }),
        resolve(root, args, variables) {
            return new Promise((resolve, reject) => {
                console.log(variables)
                
                const id = variables.id;
                delete variables[id];

                db.university.update({id:id},variables).exec(function (err, contact) {
                    assert.ifError(err)
                    console.log(contact)
                    resolve(contact)
                })
            })
        }
    },
    delete: {
        args: {
            id: {
                type: graphQl.GraphQLString,
            }
        },
        type: new graphQl.GraphQLObjectType({
            name: 'deleteUniversity',
            description: 'This is a mutation to help directly modify a delete a university from the database',
            fields: () => ({
                id: {
                    type: graphQl.GraphQLID
                }
            })
        }),
        resolve(root, args, variables) {
            return new Promise((resolve, reject) => {
                console.log(variables)
                
                const id = variables.id;
                delete variables[id];

                db.university.destroy({id:id}).exec(function (err, contact) {
                    assert.ifError(err)
                    console.log(contact)
                    resolve(contact)
                })
            })
        }
    }
}