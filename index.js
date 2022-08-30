const connectDb = require('./db/connect')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const notfound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')



//middleware
app.use(express.static('../Frontend/public')) //static middleware
app.use(express.json()) //json middleware



//routes 
app.use('/api/v1/tasks', tasks)
//404 page
app.use(notfound)
//error handler
app.use(errorHandler)



//port
const PORT = 3000;

//start server and connect database
const start = async () => {
    try {
        //connect to Db
        await connectDb(process.env.MONGO_URI)
        //listen
        app.listen(PORT, console.log('server is listening on port 3000'))
    } catch (err) {
        console.log(err)
    }
}

start()
