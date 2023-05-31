import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = (props: { todos: ToDo[] }) => {

  const checkedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem toDoItem={item} key={idx} />
        )
      })
  }
  const unCheckedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem toDoItem={item} key={idx} />
        )
      })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {unCheckedList()}
      </ul>
      <ul className="todo-list completed">
        {checkedList()}
      </ul>
    </div>
  )
}