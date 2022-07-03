const Todo = ({todo,handleDelete}) => {
    const {title,desc,category,id} = todo;
    return(
        <div className="p-2 rounded-2xl bg-green-50 h-52">
            <h1 className="text-2xl font-bold text-green-900">
                {title}
            </h1>
            <p className="mt-2 text-green-800 text-base">{desc}</p>
            <h3 className="text-green-900 font-bold text-md">{category}</h3>
            <button onClick={()=>handleDelete(id)} className="bg-red-600 text-white p-2 rounded">Delete</button>
        </div>
    )
}

export default Todo;