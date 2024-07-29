import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "https://66728a846ca902ae11b0a98c.mockapi.io/todo";

export const fetchTodosThunk = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await axios.get(SERVER_URL);
    return response.data;
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    await axios.delete(`${SERVER_URL}/${id}`);
    return id;
  }
);

export const addTodoThunk = createAsyncThunk("todos/addTodo", async (title) => {
  const response = await axios.post(SERVER_URL, { title, completed: false });
  return response.data;
});

export const toggleTodoThunk = createAsyncThunk(
  "todos/toggleTodo",
  async (id) => {
    const todo = await axios.get(`${SERVER_URL}/${id}`);
    const response = await axios.put(`${SERVER_URL}/${id}`, {
      ...todo.data,
      completed: !todo.data.completed,
    });
    return response.data;
  }
);
