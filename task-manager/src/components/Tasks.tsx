import axios from "axios"
import React, { useEffect, useState} from "react"

const Tasks = () => {

    const [tasks, setTasks] = useState<any>([])
    const [todoName, setTodoName] = useState<string>('')
    
    const baseUrl = 'http://localhost:3000'

    let bodyFormData = new FormData();
    bodyFormData.append('name', `${todoName}`);
    
    const addTodo = async (e:any) => {
        e.preventDefault()
        const data = await fetch(`${baseUrl}/api/v1/tasks`, {
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data"  
			},
			body: JSON.stringify({
				text: todoName
			})
		}).then(res => res.json());

		setTasks([...tasks, data]);
      }

    

    const getTodos = async () => {
        try {
            const fetchedTasks = await axios.get(baseUrl + "/api/v1/tasks")
            setTasks(fetchedTasks.data.tasks)
        } catch (error: any) {
          throw new Error(error)
        }
    }
    
    useEffect(() => {
        getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks])


    const deleteTask = ( _id :string) => {
        axios.delete(`${baseUrl}/api/v1/tasks/${_id}`)
    }

    
    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" onChange={(e) => setTodoName(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <div>
                {tasks.map((task : any, index: number) => (
                    <div key={index}>
                        {task.name}
                        {task.completed}
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>    
  )
}

export default Tasks