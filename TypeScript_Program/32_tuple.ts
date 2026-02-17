//TS Tuples vs Arrays:
// Array - Dynamic and can add more values in to Array no limit 
//Tuple - Fixed size and order is matters 

let person: [string, number] = ["auto", 123];
//let persons: [string, number] = ["auto", 123, "manual", 234]; // Error cannot add more than one set
let users: [string, number, boolean] = ["playwright", 345, true];

console.log (person[0]);
console.log (users[2]);

//Create tuple in Array formate 
let multi: [string, number][] = [["cat",5],["cow",8],["lion",6]];
console.log (multi[0]);
console.log (multi[1][1]);

//Add more than one set in to Tuple 
let customer :[string, number] = ["Rose", 45];
customer.push("lotus",54);
console.log(customer); 
