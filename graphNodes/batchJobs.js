var assert = require("assert")

var db;
require("../dbSchema")(function (err, models) {
    if (models) console.log("connected to model")
    db = models.collections
})

module.exports = function (params) {
    setTimeout(function () {
        console.log("executing the thing")
        
        db.student.find().exec(function(err, students){
            // console.log(students)
            
            students.map(function(student){
                console.log(student.id +  " - " + student.study_mode)
                if(student.study_mode == undefined){
                    deleteRecord(student)
                }
            })
        })
    }, 4000);
    
    function deleteRecord(record) {
        db.student.destroy(record).exec(function(err, destroyed){
            assert.ifError(err)
            console.log(destroyed)
        })
    }
}