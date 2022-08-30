const mongoose = require("mongoose");

//build schema and model for database
//structure for data- schema
const TaskSchema = new mongoose.Schema({
    name:String, completed:String
})

//model - provides an interface to the database
module.exports = mongoose.model('Task', TaskSchema)