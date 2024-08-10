import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";



function App() {
    const [catFact, setCatFact] = useState("");
    const fetchCatFact =  () => {
        Axios.get("https://catfact.ninja/fact")
            .then((response) => {
                setCatFact(response.data.fact);
            })
    }
    useEffect(() => {
        fetchCatFact();
    }, []);



    return (
        <div className="App">
            <button onClick={fetchCatFact}> Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )

}


export default App;



