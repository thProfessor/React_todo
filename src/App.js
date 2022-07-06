import { useEffect, useState,useRef } from "react";

import Form from "./components/Form";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

const getItems = () => {
  const data = localStorage.getItem("todos");

  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }
}
const App = () => {
   const [todos,setTodos] = useState(getItems());

   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])
  return (
    <Layout>
      <Form  todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </Layout>
  
  );
}

export default App;
