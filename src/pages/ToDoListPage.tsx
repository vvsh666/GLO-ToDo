//import React from "react"

import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"

export const ToDoListPage = () => {

    const [todos, setTodos] = useState<ToDo[]>([
        {
            id: 0,
            text: 'Первая задача',
            isDone: false
        },
        {
            id: 1,
            text: 'Вторая задача',
            isDone: true
        },
        {
            id: 2,
            text: 'Третья задача',
            isDone: true
        },
        {
            id: 3,
            text: 'Четвертая задача',
            isDone: false
        }
    ])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }

        setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDo = todos.filter(todo => todo.id !== toDoItem.id)
        setTodos(newToDo)
    }

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}