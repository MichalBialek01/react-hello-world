import './App.css';
import Axios from "axios";
import {useState} from "react";

//


function App() {

    const [name, setName] = useState("");
    const [responseData, setResponseData    ] = useState({});

    const fetchData = () => {
        Axios.get(`https://api.agify.io?name=${name}`)
            .then((response) => {
                setResponseData(response.data);
            })
    }

    return (
        <div className="App">
            <input placeholder="Type your name"
                   onChange={event => setName(event.target.value)}/>
            <button onClick={fetchData}>Predict age</button>


            <h1>Your name is : {responseData?.name} , and your predicted age equals {responseData?.age}</h1>
        </div>
    )

}


export default App;



