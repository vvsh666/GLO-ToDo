import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { loadFromLocalStarage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStarage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch