import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { ToDo } from "./models/todo-item";
import { NotFound } from "./pages/404";
import { HomePage } from "./pages/HomePage";
import { ItemDescription } from "./pages/ItemDescription";
import { ToDoListPage } from "./pages/ToDoListPage";

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
  
  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage todos={todos} />
        },
        {
          path: '/todo',
          element: <ToDoListPage />
        },
        {
          path: '/list/:id',
          element: <ItemDescription todos={todos} />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);


