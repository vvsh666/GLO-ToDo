import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);