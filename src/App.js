import './App.css';
import {useState} from "react";
import {Task} from "./Task";

function App() {

    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInput = (event) => {
        setNewTask(event.target.value);
    }

    const addTaskToList = () => {
        const task = {
            id: toDoList.length == 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
            name: newTask,
        }
        setToDoList([...toDoList, task]);
    }

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((task) => task.id !== taskId));
    };


    return (
        <div className="App">

            <div className="addTask">
                <input onChange={handleInput}/>
                <button onClick={addTaskToList}>Add Task</button>
            </div>

            <div className="list">
                {toDoList.map((task) => {
                    return (
                        <Task name={task.name} id={task.id} deleteTask={deleteTask}/>
                    )
                })}
            </div>


        </div>
    )
}


export default App;



