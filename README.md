## What is a object in java script ?
> In JavaScript, an object is a stand
alone entity, with properties and type.
Compare it with a cup, for example. A
cup is an object, with properties. A cup
has a color, a design, weight, a material
it is made of, etc. The same way,
JavaScript objects can have properties,
which define their characteristics.
Everything is an object in JavaScript.
## Create object
> JavaScript objectis a nonprimitive data-type that allows you to
store multiple collections of data. Objects in JS are represented as key-value
pairs. The key is the name of the property or method, and the value can be
any value including another object. To create an object in JavaScript, you can
use curly braces {}:
## Methods object

### Object.entries()
```JavaScript
const obj = { name : "Adam" , age : 20}
console.log(Objact.entries(obj))
// output [[name , Adam][age , 20]]
```
### Object. keys()
```JavaScript
const obj = { name : "Adam" , age : 20}
console.log(Objact.Kays(obj))
// output [name , age]
```

### Object. values()
```JavaScript
const obj = { name : "Adam" , age : 20}
console.log(Objact.values(obj))
// output [Adam , 20]
```

## What is Destructuring and Spreed Objacts in JAVASCRIPT
> The destructuring assignment syntax is a JavaScript expression that makes it
possible to unpack properties from object, into distinct variables

## What is This kay()
“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.

"This" have 4 situations in Js
1. in an objact method , this refers to the object .
2. Alone , this referse to the global object .
3. In a function , this referse to the global object .
4. In a function , in strict mode , this is undefind .