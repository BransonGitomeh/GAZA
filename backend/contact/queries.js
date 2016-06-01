var graphQl = require("graphql")

var db;
require("../dbSchema")(function (err, models) {
    db = models
})

// console.log(require("./type"))

module.exports = {
    contact: {
        args: {
            first: {
                type: graphQl.GraphQLID
            }
        },
        type: require("./type"),
        resolve: function (root, args) {
            db.collections.user.find().exec(function (err, users) {
                console.log(users)
            })

            return {
                id: "aweosme",
                name: "Branson Gitomeh Kuria"
            }
        }
    },
    contacts: {
        args: {
            first: {
                type: graphQl.GraphQLID
            }
        },
        type: new graphQl.GraphQLList(require("./type")),
        resolve: function (root, args) {
            return new Promise((resolve, reject) => {
                db.collections.user.find().exec(function (err, users) {
                    resolve(users)
                })
            })
        }
    }
}
