interface ITodo {
    _id: string
    name: string
    completed: boolean
    createdAt?: string
    updatedAt?: string
}
  

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}