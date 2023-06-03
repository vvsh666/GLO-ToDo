import { ToDo } from '../../models/todo-item'
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from './ToDoList.styled'
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
    <ToDoListContainer>
      <ToDoListFailed>
        {checkedList(false)}
      </ToDoListFailed>
      <ToDoListCompleted>
        {checkedList(true)}
      </ToDoListCompleted>
    </ToDoListContainer>
  )
}