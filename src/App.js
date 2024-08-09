import './App.css';
import { useState} from "react";

function App() {

    const [toDoList,setToDoList] = useState([]);
    const [newTask,setNewTask] = useState("");

    const handleInput = (event) =>{
        setNewTask(event.target.value);
    }

    const addTaskToList = () =>{
        const task ={
            id: toDoList.length ==0 ? 1: toDoList[toDoList.length-1].id+1,
            name: newTask,
        }
        setToDoList([...toDoList,task]);
    }

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((task) => task.id!== taskId));
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
                       <h1>{task.name}</h1>
                       <button onClick={()=> deleteTask(task.id)}>X</button>
                       </div>
                   )
               })}
           </div>



       </div>
    )
}




export default App;



