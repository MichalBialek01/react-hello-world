import './App.css';
import { useState} from "react";

function App() {

    //Use state declaration
    const [inputValue,setInputValue] = useState("");

    const handleInputChange = (event) => {

        setInputValue(event.target.value);
    }

    return (
       <div className="App">
           <input type="text" onChange={handleInputChange} />
           <div>
               {inputValue}
           </div>
       </div>
    )
}




export default App;



