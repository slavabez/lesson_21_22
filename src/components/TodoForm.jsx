import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(
      addTodo({
        title: values.newTask,
      })
    );
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="New task"
        name="newTask"
        rules={[
          {
            required: true,
            message: "Todo cannot be empty!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TodoForm;
