
//JavaScript Data Types and Typeof Operator
//JavaScript has dynamic types. We do not need to declare variable type explicitly. The type is determined automatically during program execution based on the value assigned to the variable.
//JavaScript has the following data types:
//1. Primitive Types:
//   a. Number: Represents both integer and floating-point numbers.
//   b. String: Represents sequences of characters.
//   c. Boolean: Represents logical entities and can have two values: true or false.
//   d. Undefined: A variable that has been declared but not assigned a value has the value undefined.
//   e. Null: Represents the intentional absence of any object value.
//2. Non-Primitive Types:
//   a. Object: Used to store collections of data and more complex entities.
//   b. Array: A special type of object used to store ordered collections of values.
//   c. Function: A block of code designed to perform a particular task.

console.log('********** typeof **********************');
let x = 20;
console.log(typeof x); // outputs: number

let y = "Hello, World!";
console.log(typeof y); // outputs: string

let z = {name: "Alice", age: 30};
console.log(typeof z); // outputs: object

let xyz = [1, 2, 3, 4, 5];
console.log(typeof xyz); // outputs: object

let flag = true;
console.log(typeof flag); // outputs: boolean

let type = typeof flag;
console.log("type of type ",type); // outputs: bool.

let k = null;
console.log(typeof k); // outputs:  returns object due to legacy reasons 

let s;
console.log(typeof s); // outputs: undefined  

function sample(){
    console.log("Inside sample function");
}

console.log(typeof sample); // outputs: function


console.log('********** instanceof **********************');
console.log(xyz instanceof Array); //true
console.log(z instanceof Object);   //true
console.log(y instanceof String); //    false
console.log(flag instanceof Boolean); // false
console.log(k instanceof Object);   //false 

console.log(k instanceof Object);   
console.log(s instanceof Object);   // actuall is undefined  
console.log(x instanceof Number);  
console.log(type instanceof String);    
console.log(z instanceof Array);    
console.log(sample instanceof Function);
