//this practise for Console:

//1.Basic 
console.clear();
console.log("Hello, World!");
console.error('This is an error message');
console.warn("This is a warning message");
console.info("This is an informational message");
console.debug("This is a debug message");
console.log("******************");

//2.Variable Logging

let username1 = "Alice";
let age = 30;
console.log("Name:", username1, "Age:", age);    
console.log("******************");
//3.Styled Logging

console.log("%cThis is a styled message", "color: blue; font-size: 20px; background-color: yellow;");
console.log("******************");
//4.Table Logging for obejects and arrays

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

console.table({users});   
console.log("******************");

//5. Table logging for objects

const product1 = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true, 
};
const product2 = {
    id:2,
    name: "Phone",
    price: 499.99,
    inStock: false 
}; 
console.table({product1, product2});
console.log("******************");

//6.Grouping Logs

console.group("User Details");  
console.log("Name: Alice");
console.log("Age: 30");
console.log("Location: New York");
console.groupEnd();
console.log("******************");

//7.Performance Timing

console.time("Loop Time");      
for (let i = 0; i < 1000000; i++) {
    // Simulating a time-consuming task
    Math.sqrt(i);
}   
console.timeEnd("Loop Time");
console.log("******************");

//8.Stack Tracing

function firstFunction() {
    secondFunction();
}       
function secondFunction() {
    thirdFunction();
}   
function thirdFunction() {
    console.trace("Stack Trace:");
}
firstFunction();
console.log("******************");

//9.Assertion Testing
let flag = false;
console.assert(flag, "Assertion failed: flag is false");
console.log("******************");

//10. Counting Logs
console.count("Log Count");
console.count("Log Count");
console.count("Log Count");
console.countReset("Log Count");
console.count("Log Count");
console.log("******************");

