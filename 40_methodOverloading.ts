// Java Scripts does not support Function/method overloading but TS can. 
// Method overloading - mean 
// 1. Same function name
// 2. Same para count , Number of Para count same 
// 3. Different Para's data type and different function Return type 

// STEP 1 : Define the Prototype for method Overloading function.

function add(a:number, b:number): number;
function add(a:string, b:string): string;
function add(a:boolean, b:boolean): boolean;

//STEP 2: Function implemenation 

function add(a:any, b:any):any{
    return a+b; 
}

console.log(add(1,2)); // 3
console.log(add("big", "Ben")); // bigben
console.log(add(true, false));// 1

