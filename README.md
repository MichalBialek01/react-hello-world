### Main source
[ReactJS Course For Beginners 2023](https://www.youtube.com/playlist?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR)









### Lesson 1 

3. "npx create-react-app hello-world ." - creates by npm react base project
2.   package.json - file with dependencies and info about project. For documentation purposes.
3.   "npm start" - run localhost on port 3000 


### Lesson 2

JSX - React rendering with UI - functions return some html code

Rendering fields in html
```
function App() {
    const name = "Michal";
    
    return (
        <div className="App">{name}</div>
    );
}
``` 
field as html 
```
import './App.css';

function App() {
    const name = <h1>Michal</h1>

    return (
        <div className="App">{name}</div>
    );
}

export default App;

```
Differences between raw js function and react component.
React component returns html. IMPORTANT - must begin with capital letter 

```
const getName = () => {
    return "Michal";
}


const GetNameComponent = () => {
    return <h1>Michal</h1>
}
```
Calling react component 
```
function App() {
    const name = <h1>Michal</h1>

    return (
        <div className="App">
            <Name></Name>  //or
            <Name/>
        </div>
    );
}


const Name = () => {
    return <h1>Michal</h1>
}
```

props - elements passed to react component 

```
import './App.css';

function App() {
    const name = <h1>Michal</h1>

    return (
        <div className="App">
            <Name name={"Michal"} age={21} email={"kontakt.michalbialek@gmail.com"}/>
            <Name name={"ExampleUser"} age={22} email={"example@example.com"}/>
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

export default App;

```


### Lesson 2 

There is possibility of use App.module.css instead of App.css
We need to:
1. Create file App.module.css
2. import import stales from  "./App.module.css";
3. When we need to use it we need to write for ex.: <div className="{styles.name}}"></div>

Conditional rendering:
To generate conditional rendering it is recommended to use ternary operator in curly bracket like:
```
<div>
    {age >= 18 ? <h2>You are adult</h2> : <h2>You aren't adult </h2>}
</div>
```


Inline styling:
There is possibility to inline change the html view. To do it, we need to add style={{here css parameters}}
To inject css parameters we need to use double curly braces, because we need to pass it as object.
Example:
```
<h1 style={{color:"red"}} >Text</h1>
```
Inline styling with conditional rendering example;
ex1:
```
    const age = 20;
    <h1 style={{color: age>=18 ? "green": "red"}}></h1>

```
ex2: If statement is true, then shows code before &&, else won't show
```
    const isAdult = true;
    {isAdult && <button>As an adult you can click it</button>}
    
```
Iterating trough elements in array:
We can use:
* foeEach
* map
* filter
* reduce


example:
```
const names = ['Michal','Andrzej','Klaudiusz','Szymon']
    return (
        <div className="App">
            <div>
                <div>
                    {names.map(
                        (name,key) =>{
                            return <h1>{name}</h1>
                        }
                    )}
                </div>
            </div>
        </div>
    );
}
```

example for list of object:
```

    const users =
        [
            {name:"Michal",age:22},
            {name:"Johnson",age:25},
            {name:"Klaudiusz",age: 24}
        ]
    return (
        <div className="App">
            <div>
                <div>
                    {users.map(
                        (user, key) => {
                            return <div>{user.name} {user.age}</div>
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

```

But better option is to use react component

```
    const users =
        [
            {name:"Michal",age:22},
            {name:"Johnson",age:25},
            {name:"Klaudiusz",age: 24}
        ]
    return (
        <div className="App">
            <div>
                <div>
                    {users.map(
                        (user, key) => {
                            return
                            <User name={user.name} age={{user.age}}/>
                        }
                    )}
                </div>
            </div>
        </div>
    );

    const User = (props) => {
        return (
            <div>
                {props.name} {props.age}
            </div>
        )
    }

}

```

Good practise is to store certain component in separate files and use import/export 


Exercise - display only planets that are gasPlanet:   
```

    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true }
    ];

    return (
        <div className={App}>
            <div>
                {planets.map(
                    (planet,key)=> {
                        (planet.isGasPlanet && <Planet name={planet.name} />)

                    }
                )}
            </div>


        </div>
    )

    const Planet = (props) =>{
        return  (
            <div>
                {props.name}
            </div>
        )
    }

```

or more inline:
```


function App() {

    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true }
    ];

    return (
        <div className={App}>
            <div>
                {planets.map(
                    (planet,key)=> {
                        (planet.isGasPlanet && <h1>{planet.name}</h1>)

                    }
                )}
            </div>


        </div>
    )


```


### Lesson 4 - UseState Hook

What is state ?


Presented approach behind the scenes increases value, but the page is loaded once, so we can't see any changes. 
```
function App() {

    let age =0;

    let increaseAge = () => {
        age++;
        console.log(age);
    }


    return (
       <div className="App">
           {age} <button onClick={increaseAge}>Increase Age</button>
       </div>
    )
}
```

To dynamically present the value use "useState"  

```
import { useState} from "react";

function App() {

    const [age,setAge] = useState(0);


    const incrementAge = () => {
        setAge(age + 1);
    }


    return (
       <div className="App">
           {age} <button onClick={increaseAge}>Increase Age</button>
       </div>
    )
}
```

ex. 2
```
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

```
ex.3 
```
import { useState} from "react";

function App() {

    const [showText,setText] = useState(true);

    return (
       <div className="App">
           <div>
               <button onClick={()=> {
                   setText(!showText);
               }}>
                   Click me to hide/show text
               </button>
           </div>
           <div>
               {showText && <h2>Hi there</h2>}
           </div>
       </div>
    )
}


```
 ex4. 

```
import { useState} from "react";

function App() {

    const [textColor,setTextColor] = useState("red");

    return (
       <div className="App">
           <div>
               <button onClick={()=> {
                   {textColor=== "red" ? setTextColor("green"):setTextColor("red")}
               }}>
                   Click me to change text color
               </button>
           </div>
           <div>
                <h1 style={{color: textColor}}> Text that is changing color </h1>
           </div>
       </div>
    )
```

Exercise:  
```
import { useState} from "react";

function App() {

    const [counter,setCounter] = useState(0);

    const increaseCounter= () => {
        setCounter(counter + 1);
    }
    const decreaseCounter= () => {
        setCounter(counter - 1);
    }

    const resetCounter= () => {
        setCounter(0);
    }



    return (
       <div className="App">
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={resetCounter}>SetToZero</button>
        </div>
           <div>
               current value: {counter}
           </div>
       </div>
    )
}

```
Inline version: 
```
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
```

### Lesson 5 - TODO List using states with CRUD - Done


### Lesson 6 - Component lifecycle and UserEffect and Strict mode

Available component stages:
1. Mounting 
2. Updating
3. Unmounting

Example to show the stages of component - just inspect elements by interacting with page, and use build-in browser inspector
```
import './App.css';
import {useState} from "react";

function App() {
    const [showText, setShowText] = useState(false);

    const Text = () => {
        const[text, setText] = useState();
        return(
            <div>
                <input
                    onChange={(event)=> {
                        setText(event.target.value)
                    }}
                />
                <h1>{text}</h1>
            </div>
        )
    }

    return (
        <div className="App">

            <button onClick={() => setShowText(!showText)}>Show text</button>
            {showText && <Text/>}
        </div>
    )

}


export default App;


```

2. UseEffect hook - used to control the component, depending on stage on with is currently on 
To simplify, what happens with component on certain stage

Ex.1 - Defining what will happen, after mounting component and updating.
So after every pressing button, this code will occur
```
    useEffect(() => {
        console.log("COMPONENT MOUNTED");
    }, []);

```

Example of use - fetching data form API immateriality after some action

We can define what props or state changes, will launch useEffect, by adding square brackets like that:

```
    useEffect(() => {
        console.log("COMPONENT MOUNTED");
    }, [showText]);

```

useEffect will occur only if showText useState will change  

2. Action after unmounting

by returning function in useEffect, we can create action that will occur while unmounting component  
ex. 
```
    useEffect(() => {

        return ()=> {
            console.log("COMPONENT UNMOUNTED")
        }
    }, );

```

example usage could be cleaning API call, after component disappear

3. What's Strict mode ?
    React checks that react rules are respected. 
    
With strict mode, useEffect is running twice (mounting, unmounting, and mounting) because first generation is to check code compatibility with react or errors like memory leaking.



### Lesson 7 - API data fetching using Axios library 

Fetching data by build-in fetch method:
```
    fetch("https://catfact.ninja/fact")
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                })
        })

```
Fetching data by axios library:

First of all we need to install axios by command: ``` npm install axios```
Secondly add import to project ```import Axios from "axios";```

```
    Axios.get("https://catfact.ninja/fact")
        .then((response) => {
            console.log(response.data);
        })
    
```

Preferred practice is to add useState, that contains catFact, to set it as a API response. 
It causes infinity fetching data, so it's preferred to surround it with useEffect clause, to control the behaviour.

ex.
````
function App() {
    const [catFact, setCatFact] = useState("");

    useEffect(() => {
        Axios.get("https://catfact.ninja/fact")
            .then((response) => {
                setCatFact(response.data.fact);
            })
    }, []);

    
    return (
        <div className="App">
            <p>{catFact}</p>
        </div>
    )

}

````
This fetching data is not the best, but for present knowledge is enough.


ex.1

```


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


            <h1>Your name is : {responseData.name} , and your predicted age equals {responseData.age}</h1>
        </div>
    )

}

```

Next exercise:
```
import './App.css';
import Axios from "axios";
import {useState} from "react";

//

function App() {

    const [fetchedExcuse, setFetchedExcuse] = useState("");

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
            .then((response) => {
                setFetchedExcuse(response.data[0].excuse);
            })
    }


    return (
        <div className="App">
            <h1>Generate An Excuse for selected situation </h1>
            <button onClick={() => fetchExcuse("family")}>Family</button>
            <button onClick={() => fetchExcuse("party")}>Party</button>
            <button onClick={() => fetchExcuse("office")}>Developers</button>

            <p>Your excuse: <br/>  {fetchedExcuse}</p>

        </div>
    )

}


export default App;

```


### Lesson 8 - React Router DOM (multiple pages)

To get React Router DOM we need firstly install it by npm

```npm install react-router-dom```

and import required things like for ex.:

```
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"; 

```
By routes we can change some fragments on page.

Inside Router we provide constant page elements like footer, sidebar ect.
Inside Routers we provide Route, that define certain pages, and link to them .

Example of usage:
```
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to={"/"}>Home </Link>
                    <Link to={"/menu"}>Menu </Link>
                    <Link to={"/contact"}>Contact </Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                <div>
                    <footer>Created in 2024 by Me © </footer>
                </div>
            </Router>
        </div>
    )
}
```
[React Router V6 
](https://www.youtube.com/watch?v=UjHT_NKR_gU)

Rest features:
- useNavigate from react-router - it  is used to redirect to some page
ex. 
````

import {Link, useNavigate} from "react-router-dom";

export const Home = () => {


    let navigate = useNavigate();

    return(
    <div>
        <button onClick={()=> {
            navigate("/contact");
        }}>
           Go to contact page
        </button>
    </div>
    )
}
````
We could also use useParams like in below example

In route we need to add (:username) after const URL 
```
<Route path="/contact/:username" element={<Contact/>}/>

```
and 
```

import {Link, useNavigate} from "react-router-dom";

export const Menu = () => {


    let navigate = useNavigate();
    let {username} = useNavigate();
    return(
        <div>
            This is contact for {username}

            <button onClick={()=> {
                navigate("/contact");
            }}>
                Go to contact page
            </button>
        </div>
    )
}
```


### Lesson 9 - UseContext Hook

Prop drilling is situation when we need to pass props element from parent to child like in ex.
````
const ParentComponent = () => {
    const [state,setState] = useState();
    return
    (
        <div>
            <MiddleComponent state={state}/>
        </div>
    )
}

const MiddleComponent = (state) => {
    return
    (
        <div>
            <Child state={state}/>
        </div>
    )
}

const Child = (state) => {
    return
    (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

````
There is a problem, that at every component between them, we need to pass this argument. 
To solve this problem we can use UseContext 
That's some kind of component that holds value, and could be passed to every route




### Lesson 10 - React query - also for fetching data from API
(disclaimer: i feel sick, so logical level decrease a little bit)


It is not recommended to use useEffect to fetch data.
The best practise is use default strictMode 


1. ``` npm install @tanstack/react-query``` in terminal

We can define places where we need to use queries - we should implement that on highest level component - in this case that's App component.

2. import: ``` import {QueryClient,QueryClientProvider} from "@tanstack/react-query"; ```

3 .create const of QueryClient(//Here configuration)
and surround places where we need to use queries:
<QueryClientProvider client={client}>   //code    </QueryClientProvider>

4. There are additional parameters like isLoading, isError or refetch to use with queries
5. useQuery by default fetches data, when it you change browser tab, and return 
To change that behaviour we can set query default setting like below:
```

    const client = new QueryClient(
        {defaultOptions:{
            queries:{
                refetchOnWindowFocus: false
            }
            }}
    );
```



