const mongoose = require("mongoose");

//build schema and model for database
//structure for data- schema
const TaskSchema = new mongoose.Schema({
    //validation
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})



//model - provides an interface to the database
module.exports = mongoose.model('Task', TaskSchema)