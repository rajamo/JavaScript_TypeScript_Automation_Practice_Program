
//✅ Normal functions have their own this depending on the calling object.
//✅ Arrow functions do not bind this, they inherit it from the outer scope.
//🔥 When to use arrow functions?
//✅ Best for
//callbacks (map, filter, setTimeout)
//short functions
//Playwright helper functions



//  Single parameter arrow function
let square = num => num*num;
const result = square (5);
console.log("Square of 5 is: " + result); // outputs: Square of 5 is: 25

// No parameter arrow function
 let msg = () => "Hello, World!";
    console.log(msg()); // outputs: Hello, World!

// Multiple parameters arrow function
 let add = (a,b) => a + b;
    console.log("Sum of 3 and 4 is: " + add(3,4)); // outputs: Sum of 3 and 4 is: 7 

// Object
    const person ={
        firstname:'raja',
        lastname:'kumar',
    }
// object arrow function
  const namename = person =>`${person.firstname} ${person.lastname}`;
console.log("Full Name: ", namename(person)); // outputs: Full Name: raja kumar

// arrow with 2 parameters
 const greet = (username, age) => `Hello, ${username}! You are ${age} years old.`;
 console.log(greet());
 console.log(greet('Alice', 25));

 //rest parameter arrow function
 const sum = (...numbers) => numbers.reduce((acc,numbers) => acc+numbers, 0);
 console.log("Sum of numbers: " + sum(1,2,3,4,5)); // outputs: Sum of numbers: 15

 const browserinfo =(browser = 'chrome',...details) => {
    return `Browser: ${browser}, Details: ${details.join(', ')}`;
 }
 console.log(browserinfo());   
 console.log(browserinfo('Firefox', 'Version 89', '64-bit'));

 //find maximum using arrow function
    const findMax = (...values) => Math.max(...values); 
    console.log("Maximum value is: " + findMax(3,7,2,9,4)); // outputs: Maximum value is: 9