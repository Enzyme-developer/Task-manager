const connectDb = require('./db/connect')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
require ('dotenv').config()

//middleware
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task manager')
})

app.use('/api/v1/tasks', tasks)


//port
const PORT = 3000;

const start = async () => {
    try {
        //connect to Db
        await connectDb(process.env.MONGO_URI)
        //listen
        app.listen(PORT, console.log('server is listeniing on port 3000'))
    } catch (err) {
        console.log(err)
    }
}

start()
