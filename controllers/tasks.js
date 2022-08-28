const Task = require('../models/task')


//create different controllers( functions that send a response ) for actions eto be performed

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}


const addTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task}) 
}


const getSingleTask = (req, res) => {
    res.json(req.params.body)
}


const updateTask = (req, res) => {
    res.send('update task')
}


const deleteTask = (req, res) => {
    res.send('delete task')
}


//export the controllers
module.exports = { getAllTasks, getSingleTask, addTask, updateTask, deleteTask }