const express = require('express');
//call express router
const router = express.Router();


const { getAllTasks, addTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasks')


//routes
router.route('/').get(getAllTasks).post(addTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


module.exports = router