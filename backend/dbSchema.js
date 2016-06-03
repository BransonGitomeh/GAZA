var waterlineInstance = require("waterline")
var orm = new waterlineInstance();
var collections = []
var assert = require("assert")

collections.push(require("./graphNodes/contact/dbSchema"))
collections.push(require("./graphNodes/student/dbSchema"))
collections.push(require("./graphNodes/university/dbSchema"))
collections.push(require("./graphNodes/course/dbSchema"))
collections.push(require("./graphNodes/level/dbSchema"))
collections.push(require("./graphNodes/level_stage/dbSchema"))
collections.push(require("./graphNodes/study_mode/dbSchema"))
collections.push(require("./graphNodes/payment_channel/dbSchema"))
collections.push(require("./graphNodes/semester/dbSchema"))


collections.map(function (collection) {
    collection.connection = "mongo";
    collection.migration = "safe";
    // collection.schema = true;
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
            // url:"mongodb://server:a10101995@ds013221.mlab.com:13221/premier"
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

