import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion"
const Form = ({todos,setTodos}) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [category,setCategory] = useState("book");


    const submitHandler = (e) => {
        e.preventDefault();
      
        const newTodo = {
            id:uuidv4(),
            title,
            desc,
            category
        }

        setTodos([...todos,newTodo]);

        setTitle("");
        console.log(newTodo);
    }
    
    return(
        <motion.div className="mt-5">
            <motion.h1 initial={{y:100,opacity:0}} animate={{ y: 0,opacity:1 }} transition={{ duration: 1 }} className="text-3xl font-bold text-green-100 mb-3">Create a Todo</motion.h1>
            <form className="grid gap-y-2" onSubmit={submitHandler}>
                <label className="text-base text-green-50">Title</label>
                <input type="text" className="rounded p-2" value={title} 
                onChange={(e)=>setTitle(e.target.value)} />
                <label className="text-base text-green-50">Description</label>
                <textarea cols="10" rows="5" className="rounded p-2" value={desc} 
                onChange={(e)=>setDesc(e.target.value)}/>
                <label className="text-base text-green-50">Category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} className="rounded p-2 ">
                    <option value="movie">Movie</option>
                    <option value="song">Song</option>
                    <option value="book">Book</option>
                </select>
                <input type="submit" className="rounded px-3 py-2 bg-green-50
                hover:bg-green-200" />
            </form>
        </motion.div>
    )
}
export default Form;