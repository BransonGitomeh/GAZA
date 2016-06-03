var graphQl = require("graphql")
var assert = require("assert")

var db;
require("../../dbSchema")(function (err, models) {
    db = models
})

module.exports = {
    university: {
        args: {
            id: {
                type: graphQl.GraphQLString
            }
        },
        type: require("./type"),
        resolve: function (root, args, Qvariables) {
            return new Promise((resolve, reject) => {
                console.log("You just asked for a single university")
                console.log(Qvariables)
                db.collections.university.findOne(Qvariables)
                .populate("courses")
                .populate("levels")
                .populate("level_stages")
                .populate("study_modes")
                .populate("semesters")
                .populate("payment_channels")
                .exec(function (err, contacts) {
                    assert.ifError(err)
                    console.log(contacts)
                    resolve(contacts)
                })
            })
        }
    },
    universities: {
        args: {
            first: {
                type: graphQl.GraphQLID
            }
        },
        type: new graphQl.GraphQLList(require("./type")),
        resolve: function (root, args) {
            return new Promise((resolve, reject) => {
                db.collections.university.find()
                       .populate("courses")
                    // .populate("levels.students")
                    // .populate("level_stages")
                    // .populate("proschools.departments.units.other_prices")
                    // .populate("proschools.departments.units.price")
                    // .populate("tri_semesters")
                    // .populate("active_tri_semester")
                    // .populate("payment_methods")
                    // .populate("level_stages")

                    //student details and aggregation nodes
                    // .populate("courses.students.course")
                    // .populate("courses.students.course")
                    // .populate("courses.students.level")
                    // .populate("courses.students.level_stage")
                    // .populate("courses.students.study_mode")
                    .exec(function (err, contacts) {
                        assert.ifError(err)
                        console.log(contacts)
                        resolve(contacts)
                    })
            })
        }
    }
}
