import { useState } from "react";
import Todo from "./Todo";
import Lottie from "lottie-react";
import loading from '../loading.json';

const TodoList = ({todos,setTodos}) => {
    const [search,setSearch] = useState("");
    const handleDelete=(id)=>{
       setTodos(todos.filter((todo)=> todo.id !==id));
    }
    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5">
           {
            todos.length>0 ? 
            todos.filter((todo)=>{
                    if(search === ""){
                        return todo;
                    }
                     return todo.category.toLowerCase().includes(search.toLowerCase());

            })
            .map((todo) => <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />) 
        :  <Lottie animationData={loading} loop={true} />    }
        </div>
        </div>
    )
}
export default TodoList;