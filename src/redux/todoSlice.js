import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoThunk,
  deleteTodoThunk,
  fetchTodosThunk,
  toggleTodoThunk,
} from "./thunks";

const initialState = {
  todos: [],
  isLoading: false,
  isAdding: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchTodosThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodosThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodosThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // Adding
    builder.addCase(addTodoThunk.pending, (state) => {
      state.isAdding = true;
    });
    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.isAdding = false;
    });
    builder.addCase(addTodoThunk.rejected, (state, action) => {
      state.isAdding = false;
      state.error = action.error.message;
    });
    // Deleting
    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    // Toggling
    builder.addCase(toggleTodoThunk.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    });
  },
});

export default todoSlice.reducer;
