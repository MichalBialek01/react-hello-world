### Sources
[React - kurs podstaw w 2h krok po kroku!](https://www.youtube.com/watch?v=ETwdg4lvUUM&pp=ygUGUmVhY3Qg)

[Typescript - kurs podstaw 🔥 Tutorial krok po kroku!](https://www.youtube.com/watch?v=5CBZ6DymX0Y&t=3691s&pp=ygULVHlwZXNjcmlweSA%3D)

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



### Lesson 7 - API data fetching using Axios libary 