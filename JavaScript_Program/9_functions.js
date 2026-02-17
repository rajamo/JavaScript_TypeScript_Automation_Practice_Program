//1. Normal function
console.log("==Normal Function==");
function add(a, b) {
    return a + b;
}   
console.log("Sum using normal function:", add(5, 10)); // outputs: Sum using normal function: 15

//2. Anonymous function : WITHOUT a Name and stored in a Variable and called via variable name 
console.log("==Anonymous Function==");
let multiply = function(a, b) {
    return a * b;
};      
console.log("Product using anonymous function:", multiply(5, 10)); // outputs: Product using anonymous function: 50

//3. Arrow function
console.log("==Arrow Function==");
let divide = (a, b) => a / b;
console.log("Quotient using arrow function:", divide(10, 2)); // outputs: Quotient using arrow function: 5  

//4.Constructor function
console.log("==Constructor Function==");
function person(name, age) {
    this.name = name;
    this.age = age;
}       
let person1 = new person("John", 30);
console.log("Person1 Name:", person1.name); // outputs: Person1 Name: John
console.log("Person1 Age:", person1.age); // outputs: Person1 Age: 30

//simple example of Function constructor
 const sum = new Function ('x','y','return x + y;')
console.log("Sum using Function constructor:", sum(5,10)); // outputs: Sum using Function constructor: 15


//5. IIFE (Immediately Invoked Function Expression)
console.log("==IIFE==");    
(function() {
    let message = "Hello from IIFE!";
    console.log(message); // outputs: Hello from IIFE!
})();

//6.Generator function
console.log("==Generator Function==");
function* numberGenerator() { // formating function clear with *
    yield 1;    
    yield 2;
    yield 3;
}
let gen = numberGenerator();

for (let value of gen) {
    console.log("Generated value:", value); // outputs: Generated value: 1, 2, 3
}

//7. Recursive function
console.log("==Recursive Function==");
function factorial(n) {
    if (n === 0) {
        return 1;
    }   
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); // outputs: Factorial of 5: 120

//8. Callback function
console.log("==Callback Function==");
function fetchData(callback) {
    let data = "Sample Data";
    callback(data);
}
fetchData(function(data) {
    console.log("Fetched Data:", data); // outputs: Fetched Data: Sample Data
});

//9. Higher-order function
console.log("==Higher-Order Function==");
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}   
let sumResult = operateOnNumbers(5, 10, (x, y) => x + y);
console.log("Sum using higher-order function:", sumResult); // outputs: Sum using higher-order function: 15 
let multiplyResult = operateOnNumbers(5, 10, (x, y) => x * y);
console.log("Product using higher-order function:", multiplyResult); // outputs: Product using higher-order function: 50

//simple example of higher order function

function subtract(a,b){
    return a-b;
}   
function higherOrderFunc (x,y,operation){
    return operation(x,y);
}   

let result = higherOrderFunc (10,5,subtract);
console.log("Subtraction using higher order function:", result); // outputs: Subtraction using higher order function: 5

//10. Async function    
console.log("==Async Function==");
async function fetchAsyncData() {
   return "Async Data";
    //throw new Error("Failed to fetch data");
}       
fetchAsyncData().then(data => 
    {
    console.log("Fetched Async Data:", data); // outputs: Fetched Async Data: Async Data
    })
.catch(error => {
    console.error("Error fetching async data:", error);
});


//11. Default parameters
console.log("==Default Parameters==");      
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet();// outputs: Hello, Guest!
greet("Alice");  // outputs: Hello, Alice!
console.log("****End**************");