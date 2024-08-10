import './App.css';
import Axios from "axios";
import {useState} from "react";

//

function App() {

    const [fetchedExcuse, setFetchedExcuse] = useState({});

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
            .then((response) => {
                setFetchedExcuse(response.data[0]);
            })
    }


    return (
        <div className="App">
            <h1>Generate An Excuse for selected situation </h1>
            <button onClick={() => fetchExcuse("family")}>Family</button>
            <button onClick={() => fetchExcuse("party")}>Party</button>
            <button onClick={() => fetchExcuse("office")}>Developers</button>

            <p>Your excuse: <br/>  {fetchedExcuse.excuse}</p>

        </div>
    )

}


export default App;



