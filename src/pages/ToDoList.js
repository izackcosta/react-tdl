import { useState } from "react"

const ToDoList = () =>
{

    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChange = (e)=>{
        setNewTask(e.target.value)
    }

    const addTask = ()=>{
        const newList = [...todoList, newTask]
        setNewTask(newList)
    }

    return(
        <div>
        <div className="list-item-creator">
            <h1>ADD ITEM TO THE LIST:</h1>
            <input type='text' onChange={handleChange} />
            <button onClick={()=>{}}>+</button>
        </div>
        <div>
        <h1>List:</h1>
        </div>
        </div>
    )
}

export default ToDoList