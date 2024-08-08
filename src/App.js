import './App.css';

function App() {
    const name = <h1>Michal</h1>

    return (
        <div className="App">
            <Name name={"Michal"} age={21} email={"kontakt.michalbialek@gmail.com"}/>
            <Job salar={1000} position={"Java Developer"} company={"Google"} />
            <Name name={"ExampleUser"} age={22} email={"example@example.com"}/>
            <Job salar={8000} position={"DevOps"} company={"Oracle"} />
        </div>
    );
}


const Name = (props) => {
    return (
        <div>
            <h1> {props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}

const Job = (props) =>  {
    return (
        <div>
            <h2>{props.salary}</h2>
            <h2>{props.position}</h2>
            <h2>{props.company}</h2>
        </div>
    )
}



export default App;



