### Sources
https://www.youtube.com/watch?v=ETwdg4lvUUM&pp=ygUGUmVhY3Qg
https://www.youtube.com/watch?v=5CBZ6DymX0Y&t=3691s&pp=ygULVHlwZXNjcmlweSA%3D
https://www.youtube.com/playlist?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR




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


###Lesson 2 

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