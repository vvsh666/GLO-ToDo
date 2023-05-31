import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = () => {

  const todo1: ToDo = {
    id: 0,
    text: 'Первая задача',
    isDone: false
  }
  const todo2: ToDo = {
    id: 1,
    text: 'Вторая задача',
    isDone: true
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <ToDoListItem toDoItem={todo1} />
      </ul>
      <ul className="todo-list completed">
        <ToDoListItem toDoItem={todo2} />
      </ul>
    </div>
  )
}