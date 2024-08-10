export const Task = (props) => {
    return (
        <div className="task"
        style={{backgroundColor: props.completed ? 'green' : 'white',
                color: props.completed ? 'white' : 'black'}}>
            <h1>{props.name}</h1>
            <button onClick={()=> props.completeTask(props.id)} >Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>

        </div>
    )
}