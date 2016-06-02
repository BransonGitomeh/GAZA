var waterlineInstance = require("waterline")
var orm = new waterlineInstance();
var collections = []
var assert = require("assert")

collections.push(require("./contact/dbSchema"))
collections.push(require("./student/dbSchema"))


collections.map(function (collection) {
    collection.connection = "mysql";
    collection.migration = "drop";
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
            url:"mongodb://genesisServer:a10101995@ds015398.mongolab.com:15398/genesis"
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

