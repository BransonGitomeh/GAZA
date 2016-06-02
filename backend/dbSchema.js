var waterlineInstance = require("waterline")
var orm = new waterlineInstance();
var collections = []
var assert = require("assert")

collections.push(require("./contact/dbSchema"))

console.log(require("./contact/dbSchema"))

collections.map(function (collection) {
    collection.connection = "mongo";
    collection.migration = "safe";
    collection.schema = true;
    var collectionInstance = waterlineInstance.Collection.extend(collection)
    orm.loadCollection(collectionInstance)
})

var config = {
    adapters: {
        disk: require("sails-disk"),
        mysql: require('sails-mysql'),
        mongo: require('sails-mongo'),
    },

    connections: {
        disk: { adapter: "disk" },
        mysql: {
            adapter: 'mysql',
            host: 'localhost',
            port: 3306,
            user: 'testuser',
            password: 'password',
            database: 'testdb'
        },
        mongo: {
            adapter: 'mongo',
            host: 'localhost', // defaults to `localhost` if omitted
            port: 27017, // defaults to 27017 if omitted
            user: 'username_here', // or omit if not relevant
            password: 'password_here', // or omit if not relevant
            database: 'database_name_here' // or omit if not relevant
        }
    }
}


function initialize(callback) {
    return orm.initialize(config, function (err, models) {
        // assert.ifError(err)
        console.log("Innitialised connection")
        callback(err, orm)
    })
}


module.exports = initialize

