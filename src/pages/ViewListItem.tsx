import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const ViewListItem = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setState] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todoList.find((todo) => todo.id === Number(id))

        if (searchTodo) {
            setState(searchTodo)
        } else {
            navigate('/404')
        }
    }, [todoList, id, navigate])

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}