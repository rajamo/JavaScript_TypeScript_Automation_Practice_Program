//Template Literals in JavaScript
//Using backticks to create strings with embedded expressions and multi-line support

//1. Basic Template Literal

const greet = `Hello, World!`; // using `` backticks for single line string
console.log(greet);
console.log("******************");

//2. Multi-line String
const multiline = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiline);
console.log("******************");

//3. Embedded Expressions
const Fname = "Alice";
const age = 30;
const message = `My name is ${Fname} and I am ${age} years old.`; // embedding variables
console.log(message);
console.log("******************");
//4. embedded Expressions with calculations
const a = 5;
const b = 10;
const calculs = `The sume of ${a} and ${b} is ${a+b} `; // embedding expression
console.log(calculs);
console.log("******************");

//5. Function calls within Template Literals
function setXpathName(fName){
    return `//input[@name='${fName}']`;
}

const getXpath1= setXpathName("Apple");
const getXpath2 = setXpathName('Banana');
console.getXpath3 = setXpathName('Grapes\'s'); // escape single quote

console.log(getXpath1); //output: //input[@name='Apple']
console.log(getXpath2); //output: //input[@name='Banana']
console.log(console.getXpath3); //output: //input[@name='Grapes's']
console.log("******************");