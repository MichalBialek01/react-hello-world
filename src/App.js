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



    return (
       <div className="App">

           <div className="addTask">
               <input onChange={handleInput}/>
               <button onClick={addTaskToList}>Add Task</button>
           </div>

           <div className="list">
               {toDoList.map((task) =>{
                   return <h1>{task}</h1>
               })}
           </div>



       </div>
    )
}




export default App;



