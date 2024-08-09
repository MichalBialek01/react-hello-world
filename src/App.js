import './App.css';
import { useState} from "react";

function App() {

    const [toDoList,setToDoList] = useState([]);
    const [newTask,setNewTask] = useState("");

    const handleInput = (event) =>{
        setNewTask(event.target.value);
    }

    const addTaskToList = () =>{
        setToDoList([...toDoList,newTask]);
    }


    const deleteTask = (taskName) => {
        const newTodoList = toDoList.filter((task) => task!== taskName);
        setToDoList(newTodoList)
    };


    return (
       <div className="App">

           <div className="addTask">
               <input onChange={handleInput}/>
               <button onClick={addTaskToList}>Add Task</button>
           </div>

           <div className="list">
               {toDoList.map((task) =>{
                   return (
                       <div>
                       <h1>{task}</h1>
                       <button onClick={()=> deleteTask(task)}>X</button>
                       </div>
                   )
               })}
           </div>



       </div>
    )
}




export default App;



