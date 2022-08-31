import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:3000"


//fetch all tasks
// export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
//   try {
//     const tasks: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/api/v1/tasks")
//     // console.log(tasks);
//     return tasks
//   } catch (error: any) {
//     throw new Error(error)
//   }
// }


//delete a task
export const deleteTodo = async ( _id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/api/v${_id}`)
    return deletedTodo
  } catch (error: any) {
    throw new Error(error)
  }
}