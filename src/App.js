import { useState } from "react";
import Form from "./components/Form";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos,setTodos] = useState([]);

  return (
    <Layout>
      <Form  todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </Layout>
  );
}

export default App;
