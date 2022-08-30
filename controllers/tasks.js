const Task = require('../models/task')
const asyncWrapper = require('../middleware/asyncWrapper')
const { createCustomError } = require('../errors/customError')
//create different controllers( functions that send a response ) for actions to be performed
//use the asyncWrapper function to avoid try/catch redundancy


const getAllTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks}) 
})



const addTask = asyncWrapper (async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task}) 
})




const getSingleTask = asyncWrapper(async (req, res, next) => {
    //get task id from params
    const { id: TaskID } = req.params
    const singleTask = await Task.findOne({ _id: TaskID })

    //return error message if task id is null
    if (!singleTask) {
        return next(createCustomError(`No task with ID ${TaskID}`, 404 ))
    }
    res.status(200).json({singleTask})
})



const updateTask = asyncWrapper(async (req, res) => {
    //get task id from params
    const { id: TaskID } = req.params
    //find and update task using the id, body and options
    const singleTask = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
        new: true, runValidators:true
    })
    //return error message if task id is null
    if (!singleTask) {
        return next(createCustomError(`No task with ID ${TaskID}`, 404 ))
    }
    res.status(200).json({id: singleTask, data: req.body})
})



const deleteTask = asyncWrapper(async (req, res) => {
    //get task id from params
    const { id: TaskID } = req.params
    //find and delete task
    const singleTask = await Task.findOneAndDelete({ _id: TaskID })
    //return error message if task id is null
    if (!singleTask) {
        return next(createCustomError(`No task with ID ${TaskID}`, 404 ))
    }
    // res.status(200).json({singleTask})
})


//export the controllers
module.exports = { getAllTasks, getSingleTask, addTask, updateTask, deleteTask }