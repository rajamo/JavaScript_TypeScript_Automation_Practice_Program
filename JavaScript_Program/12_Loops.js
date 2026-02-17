


// Baics of Loops in JavaScript
console.log("------for Loops------");

function loopsExample() {
    for (let i = 0; i <=10; i++) {
        console.log("printing i value: " + i);
}
}
loopsExample();

console.log("------for of Loops ------");
//for ..of loop
// recommended for array and string , Returns element value and not index, 
// useful to iterate over iterable data types like arrays, strings, maps, sets


function forOfLoop()
{
    let arrayOne = [10,20,30,40,50];
    for(let ele of arrayOne)
    {
        console.log("printing element value: " + ele);
        console.log(arrayOne);    }
}
forOfLoop();

console.log("------for in Loops ------");
//for ..in loop
// returns index and not element value for arrays so not recommended for array and string 
// useful to iterate over objects and return value of enumerable properties of an object based on keys.

let arrayOne = [5,50,6,60];
function forInArryLoop(){
    for (let i in arrayOne) // this not recommended for array it returns index not element value
    {
console.log ("printing index value: " + i, "and element value: " + arrayOne[i]);
    }
}
forInArryLoop();


//Objects
function objectExample(){
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        eyeColor: "blue"    
    }
    for (let key in person){ // this is recommended for object it returns values based on keys
        console.log(key + ": " + person[key]);
    }
}
objectExample();


//While Loop    
console.log("------While Loops ------");

function whileLoop(){
    let i =1; 
    do{
        console.log("printing i value: " + i);
        i++;
        if(i%5==0){
            console.log("Hi Five"); 
            break;    
                    }
   
} 
 while(i<=100);
}
whileLoop();



