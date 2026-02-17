//Async mean non-blocking: exmple: setTimeout, fetch, event listener
//Sync mean blocking : example: for loop, console.log   
// JavaScript is single-threaded language, it means it has only one call stack and one memory heap.
// When a function is called, it is added to the call stack and executed one by one.
// In synchronous code, each operation must complete before the next one begins, blocking the execution of subsequent code until the current operation finishes.
// In asynchronous code, operations can be initiated and then allow other code to run while waiting for the operation to complete, enabling non-blocking behavior.

// Synchronous vs Asynchronous JavaScript
// Example of Synchronous : Waitier took order and served one by one
// Example of Asynchronous : Waitier took order and served when food is ready, in the meantime took other orders



console.log ('--------------Sync ------------------');
//Sync
console.log("Start");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}   
console.log("loop ended");

console.log ('--------------Async ------------------');
console.log("Start Async"); //print fisrt
setTimeout(() => {
    console.log("Inside setTimeout"); // print after 2 seconds and  when the call stack is empty // Print last
},2000); // 2 seconds delay 
console.log("End Async"); //print second

