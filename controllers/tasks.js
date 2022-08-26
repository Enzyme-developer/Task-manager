//create different controllers( functions that send a response ) for actions eto be performed

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}


const addTask = (req, res) => {
    res.send('add Task')
}


const getSingleTask = (req, res) => {
    res.send('single task')
}


const updateTask = (req, res) => {
    res.send('update task')
}


const deleteTask = (req, res) => {
    res.send('delete task')
}



//export the controllers
module.exports = { getAllTasks, getSingleTask, addTask, updateTask, deleteTask }