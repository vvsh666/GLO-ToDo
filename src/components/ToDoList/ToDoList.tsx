import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

  const checkedList = (check: boolean) => {
    return props.todos
      .filter((item) => item.isDone === check)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        )
      })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList(false)}
      </ul>
      <ul className="todo-list completed">
        {checkedList(true)}
      </ul>
    </div>
  )
}