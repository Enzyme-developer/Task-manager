//require module
const express = require('express');
//call express
const app = express()
const tasks = require('./routes/tasks')


//middleware
app.use(express.json())



//routes
app.get('/hello', (req, res) => {
    res.send('Task manager')
})

app.use('/api/v1/tasks', tasks)




//port
const PORT = 3000;

//listen
app.listen(PORT, console.log('server is listeniing on port 3000'))