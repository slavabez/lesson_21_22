import React from "react";
import { Divider, List, Typography, Flex, Button } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { deleteTodo, toggleTodo } from "../redux/todoSlice";

const { Text } = Typography;

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <Divider orientation="left">Task list</Divider>
      <List
        bordered
        dataSource={todoList}
        renderItem={(item) => (
          <List.Item>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <Text disabled={item.completed}>{item.title}</Text>
              <div>
                <Button
                  type="default"
                  icon={<CheckOutlined />}
                  onClick={() => {
                    dispatch(
                      toggleTodo({
                        id: item.id,
                      })
                    );
                  }}
                />
                <Button
                  type="default"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    dispatch(
                      deleteTodo({
                        id: item.id,
                      })
                    );
                  }}
                />
              </div>
            </Flex>
          </List.Item>
        )}
      />
    </>
  );
};
export default TodoList;
