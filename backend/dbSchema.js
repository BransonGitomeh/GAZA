var waterlineInstance = require("waterline")
var orm = new waterlineInstance();
var collections = []
var assert = require("assert")

collections.push(require("./contact/dbSchema"))

console.log(require("./contact/dbSchema"))

collections.map(function (collection) {
    collection.connection = "disk";
    collection.migration = "safe";
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
        // assert.ifError(err)
        console.log("Innitialised connection")        
        callback(err,orm)        
    })
}

module.exports = initialize

