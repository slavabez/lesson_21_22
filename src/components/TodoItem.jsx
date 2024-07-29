import { Divider, List, Typography, Flex, Button } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { toggleTodoThunk, deleteTodoThunk } from "../redux/thunks";

const { Text } = Typography;

export default function TodoItem({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  return (
    <List.Item>
      <Flex justify="space-between" style={{ width: "100%" }}>
        <div
          style={{
            maxWidth: "calc(100% - 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Text
            className={isExpanded ? "" : "clamped-text"}
            disabled={item.completed}
          >
            {item.title}
          </Text>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            Show more
          </button>
        </div>

        <div>
          <Button
            type="default"
            icon={<CheckOutlined />}
            onClick={() => {
              dispatch(toggleTodoThunk(item.id));
            }}
          />
          <Button
            type="default"
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              dispatch(deleteTodoThunk(item.id));
            }}
          />
        </div>
      </Flex>
    </List.Item>
  );
}
