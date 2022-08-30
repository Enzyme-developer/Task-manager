const connectDb = require('./db/connect')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
require ('dotenv').config()

//middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)

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
