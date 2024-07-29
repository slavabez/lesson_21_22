import React, { useEffect } from "react";
import { Divider, List, Typography, Flex, Button } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchTodosThunk,
  toggleTodoThunk,
  deleteTodoThunk,
} from "../redux/thunks";
import TodoItem from "./TodoItem";

const { Text } = Typography;

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, []);

  return (
    <>
      <Divider orientation="left">Task list</Divider>
      <List
        bordered
        dataSource={todoList}
        renderItem={(item) => <TodoItem item={item} />}
      />
    </>
  );
};
export default TodoList;
