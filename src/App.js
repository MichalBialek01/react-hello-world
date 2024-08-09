import './App.css';
import { useState} from "react";

function App() {

    const [counter,setCounter] = useState(0);


    return (
       <div className="App">
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <button onClick={
                ()=>{
                    setCounter(counter + 1);
                }
            }>Increase</button>
            <button onClick={
                ()=>{
                    setCounter(counter - 1);
                }
            }>Decrease</button>
            <button onClick={
                ()=>{
                    setCounter(0)
                }
            }>SetToZero</button>
        </div>
           <div>
               current value: {counter}
           </div>
       </div>
    )
}




export default App;



