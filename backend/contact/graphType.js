var graphql = require("graphql")

var db;
require("../dbSchema")(function(err, models){
    // console.log(models)
    db = models
})

var type = {
    type: graphql.GraphQLString,
    resolve() {
        db.collections.user.find().exec(function(err, users){
            console.log(users)
        })
        
        return 'Branie';
    }
}

module.exports = type;