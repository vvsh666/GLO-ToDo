import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = () => {

  const todo1: ToDo = {
    id: 0,
    text: 'Первая задача',
    isDone: false
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <ToDoListItem toDoItem={todo1} />
      </ul>
      <ul className="todo-list completed">
        {/* <ToDoListItem /> */}
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  )
}