var waterlineInstance = require("waterline")
var orm = new waterlineInstance();
var collections = []
var assert = require("assert")

collections.push(require("./contact/dbSchema"))

console.log(require("./contact/dbSchema"))

collections.map(function (collection) {
    collection.connection = "disk";
    collection.schema = true;
    var collectionInstance = waterlineInstance.Collection.extend(collection)
    orm.loadCollection(collectionInstance)
})

var config = {
    adapters: {
        disk: require("sails-disk"),
    },

    connections: {
        disk: { adapter: "disk" }
    }
}



initialize = function (callback) {
    return orm.initialize(config, function (err, models) {
        console.log("Innitialised connection")
        // console.log(models.collections)

        //test if the user can be saved
        // models.collections.user.create({
        //     name: "Branson",
        //     age: Math.random()
        // }).exec(function (err, user) {
        //     assert.ifError(err)
        //     console.log(user)
        // })
        
        callback(err,models)
    })
}

module.exports = initialize

