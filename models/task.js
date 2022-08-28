const mongoose = require("mongoose");

//structure for data- schema
const TaskSchema = new mongoose.Schema({
    name:String, completed:Boolean
})

//model - provides an interface to the database
module.exports = mongoose.model('Task', TaskSchema)