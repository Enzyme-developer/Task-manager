import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './style.css'

const initialValue = {
    name: "",
    completed : false
}

const baseUrl = 'http://localhost:3000'

const SingleTask = () => {
    const navigate = useNavigate()
    //destructrure id from the params
    const { id } = useParams()
    // console.log(id);
    
    const [newTask, setNewTask] = useState(initialValue)
    const [error, setError] = useState('')


    
    //get request
    useEffect(() => {
        const getTodo = async () => {
            try {
                const singleTask = await axios.get(`${baseUrl}/api/v1/tasks/${id}`)
                // console.log(singleTask);
                setNewTask(singleTask.data.singleTask)
            } catch (error: any) {
                console.log((error));
                throw new Error(error)
            }
        }

        getTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    //patch/put request
    const editTask = async (e: any) => {
        e.preventDefault()
        try {
            await axios.patch(`${baseUrl}/api/v1/tasks/${id}`, { name: newTask.name, completed: newTask.completed })
            navigate('/')
        } catch(error: any) {
            setError(error.response.data.msg)
            // console.log(error);
        }
    }



    //manage field values
    const onValueChange = (e: any) => {
        setNewTask({...newTask, [e.target.name]: e.target.value});
        // console.log(newTask);
    }



  return (
    <div className='container'>
        <h1>Individual Task</h1>
          <div>
              <form onSubmit={editTask}>
                  <label htmlFor="name" className='label'>Task name : </label>
                  <input type="text" name='name' value={newTask.name} onChange={(e) => onValueChange(e)} />
                  <label htmlFor="name" className='label'>Completed: </label>
                  <select name="completed" value={newTask.completed.toString()} onChange={(e) => onValueChange(e)}>
                      <option value="true">True</option>
                      <option value="false">false</option>
                  </select>
                  <button style={{ marginBottom: '30px', marginTop: '30px' }} type='submit'>Edit Task</button>
                  <p>{error}</p>
              </form>

              <Link className='back' to='/'>Back to Tasks</Link>
        </div>
    </div>
  )
}

export default SingleTask