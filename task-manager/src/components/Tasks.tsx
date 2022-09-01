import axios from "axios"
import React, { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import './style.css'

const Tasks = () => {

    const [tasks, setTasks] = useState<any>([])
    const [todoName, setTodoName] = useState<string>('')
    
    const baseUrl = 'http://localhost:3000'
    // console.log(tasks);
    

    //post request
    const addTodo = async (e: any) => {
        e.preventDefault()
        const addedTask = await axios.post(`${baseUrl}/api/v1/tasks`, { name: todoName, });
        setTodoName(' ')
        console.log(addedTask.data.task)
        return addedTask
    }

    

    //get request
    useEffect(() => {
        const getTodos = async () => {
            try {
                const fetchedTasks = await axios.get(baseUrl + "/api/v1/tasks")
                setTasks(fetchedTasks.data.tasks)
            } catch (error: any) {
              throw new Error(error)
            }
        }

        getTodos()
    }, [tasks])



    //delete request
    const deleteTask = ( _id :string) => {
        axios.delete(`${baseUrl}/api/v1/tasks/${_id}`)
    }

    
    return (
        <div className='container'>
            <h1>Task Manager</h1>
            <form onSubmit={addTodo}>
                <input type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <div className="tasks">
                {tasks.map((task: any, index: number) => (
                        <div className='task' key={index}>
                            <div className="name-div">
                                <h3 className={ !task.completed ? 'regular' : 'crossed' }>{task.name}</h3>
                                <h4 className="completed" >completed: {task.completed.toString()}</h4>
                            </div>
                            <div>
                                <button onClick={() => deleteTask(task._id)}>Delete</button>
                                <Link className='edit' to={`/:${task._id}`}>Edit</Link>
                            </div>
                        </div>
                ))}
            </div>
        </div>    
  )
}

export default Tasks