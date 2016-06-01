var graphql = require("graphql")

var db;
require("../dbSchema")(function (err, models) {
    db = models
})

var type = new graphql.GraphQLObjectType({
    name: 'contact',
    fields: {
        id: graphql.GraphQLString
    },
    resolve() {
        db.collections.user.find().exec(function (err, users) {
            console.log(users)
        })

        return {
            id:"200"
        };
    }
})

module.exports = type;