// Destructuring assignment in JavaScript
//Assigning values from arrays and objects to variables using destructuring syntax

//1.Array Destructuring
const num = [20,20,490,890];
const [a,b,c] = num //assigning first three values of array to a,b,c
console.log(a); //20
console.log(b); //20
console.log(c); //490
console.log("******************");

//2.Object Destructuring
const person = {
    fname :"Capa",
    sname:"less",
    age: 23
};

const{fname, sname, age} = person; //assigning object properties to variables
console.log(fname); //Capa
console.log(sname); //less
console.log(age); //23
console.log("******************");

//3. spread operator with array destructuring
const colore = ["red", "green", "blue", "yellow", "purple"];
const [firstcolor, secondcolor,...othercolrs] = colore; //using spread operator to collect remaining elements
console.log(firstcolor); //red  
console.log(secondcolor); //green
console.log(othercolrs); //["blue", "yellow", "purple"]
console.log("******************");

//4. functioan parameter WithOUT destructuring

const user = {
    firstname : "John",
    lastname : "Doe",
};

function displayUserInfo(user){
    console.log("First Name:", user.firstname + ' '+ "Last Name:", user.lastname);
};

displayUserInfo (user); //First Name: John Last Name: Doe
console.log("******************");

//5. function parameter WITH destructuring

function displayUserDetails({firstname, lastname}){
    console.log("First Name:", firstname + ' '+ "Last Name:", lastname);
};

displayUserDetails(user);
console.log("******************");


