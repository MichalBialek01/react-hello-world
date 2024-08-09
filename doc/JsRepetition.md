Repetition of JS basics, basic on :
[All The JavaScript You Need To Know For React (More JS To Know)
](https://www.youtube.com/watch?v=ACaT1Gfhe6I)

### What is DOM 
DOM - Document Object Model
It's a representation of webpage, that react interact with.Especial to interacting with page

React creates virtual representation of DOM, by JSX.

### Import and export notation 
````
ex. 
import axios from "axios; // react aproach 

module.exports = {anyObject};
````

### Ternary operator 
statement ? ifTrue : ifFalse;
statement  && ifTrue 


### Optional Chaining 
For ex. if we fetch some data from API, and we will make some action only in case is this object exists, we use question mark (?)

Example of fetching data only if person exists 
```
const fetchData = async ()=> {
    const data = await fetch("imaginaryapi.com);
    const name = data.person?.name
}
```

### Template Literals
Instead of concatenating it's better to use template literal, witch means (`someString ${myVariable}`) 