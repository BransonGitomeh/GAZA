var waterlineInstance = require("waterline")
var orm = new waterlineInstance();
var collections = []
var assert = require("assert")

collections.push(require("./graphObjects/church/dbSchema"))
collections.push(require("./graphObjects/event/dbSchema"))
collections.push(require("./graphObjects/member/dbSchema"))
collections.push(require("./graphObjects/message/dbSchema"))
collections.push(require("./graphObjects/ministry/dbSchema"))
collections.push(require("./graphObjects/page/dbSchema"))

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
            adapter: 'mongo'
            // url:"mongodb://kamikazechaser:kamikazechaser@ds015909.mlab.com:15909/expresso"
             
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

