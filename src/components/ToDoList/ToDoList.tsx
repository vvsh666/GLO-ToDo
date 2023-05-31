import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = () => {

  const todos: ToDo[] = [
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
  ]

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {
          todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
              return (
                <ToDoListItem toDoItem={item} key={idx} />
              )
            })
        }
      </ul>
      <ul className="todo-list completed">
        {
          todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
              return (
                <ToDoListItem toDoItem={item} key={idx} />
              )
            })
        }
      </ul>
    </div>
  )
}