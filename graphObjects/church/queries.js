var graphQl = require("graphql")
var assert = require("assert")

var db;
require("../../dbSchema")(function (err, models) {
    db = models
})

module.exports = {
    church: {
        args: {
            id: {
                type: graphQl.GraphQLID
            }
        },
        type: require("./type"),
        resolve: function (root, args,Qvariables) {
            return new Promise((resolve, reject) => {
                console.log(Qvariables)
                db.collections.church.findOne(Qvariables).exec(function (err, contacts) {
                    assert.ifError(err)
                    console.log(contacts)
                    resolve(contacts)
                })
            })
        }
    },
    churches: {
        args: {
            first: {
                type: graphQl.GraphQLID
            }
        },
        type: new graphQl.GraphQLList(require("./type")),
        resolve: function (root, args) {
            return new Promise((resolve, reject) => {
                db.collections.church.find()
                .populate("events")
                .populate("members")
                .populate("messages.member")
                .exec(function (err, contacts) {
                    resolve(contacts)
                })
            })
        }
    }
}
