const mongoose = require("mongoose");

//connect database
const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,  
  })
}  

module.exports = connectDb

