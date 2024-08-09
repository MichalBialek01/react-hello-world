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
            completed: false
        }
        setToDoList([...toDoList, task]);
    }

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((task) => task.id !== taskId));
    };


    const completeTask = (taskId) => {
        setToDoList(toDoList.map(
                (task) => {
                    if (task.id === taskId) {
                        return {...task, completed: true};
                    } else {return task};
                }
            )
        );
    }


    return (
        <div className="App">

            <div className="addTask">
                <input onChange={handleInput}/>
                <button onClick={addTaskToList}>Add Task</button>
            </div>

            <div className="list">
                {toDoList.map((task) => {
                    return (
                        <Task name={task.name}
                              id={task.id}
                              completed={task.completed}
                              deleteTask={deleteTask}
                              completeTask={completeTask}
                              />
                    )
                })}
            </div>


        </div>
    )
}


export default App;



