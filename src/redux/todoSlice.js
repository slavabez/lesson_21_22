import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { title } = action.payload;
      state.todos.push({
        id: new Date().getTime(),
        title,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
