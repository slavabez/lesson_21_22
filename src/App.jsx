import { Typography } from "antd";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import AlertAndLoading from "./components/AlertAndLoading";

import "./index.css";

const { Title } = Typography;

function App() {
  return (
    <Provider store={store}>
      <div>
        <Title>Todo list with Redux Toolkit</Title>
        <TodoForm />
        <AlertAndLoading />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
