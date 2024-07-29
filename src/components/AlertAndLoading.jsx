import { Alert, Spin } from "antd";
import { useSelector } from "react-redux";

export default function AlertAndLoading() {
  const error = useSelector((state) => state.todo.error);
  const isLoading = useSelector((state) => state.todo.isLoading);

  return (
    <div>
      {error && <Alert message={error} type="error" showIcon />}
      {isLoading && <Spin size="large" />}
    </div>
  );
}
