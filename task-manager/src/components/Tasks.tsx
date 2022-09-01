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
        <>
            <form onSubmit={addTodo}>
                <input type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <div>
                {tasks.map((task: any, index: number) => (
                    <Link to={`/:${task._id}`} key={index}>
                        <p className={ !task.completed ? 'regular' : 'crossed' }>{task.name}</p>
                        <p>completed: {task.completed.toString()}</p>
                        <p>{task._id}</p>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </Link>
                ))}
            </div>
        </>    
  )
}

export default Tasks