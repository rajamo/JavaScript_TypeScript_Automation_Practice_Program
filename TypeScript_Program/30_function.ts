//********* TypeScript Functions and Retrun Types 1.Void 2.Never 3.int 4.any ****************

/* 1.function return Type = nothing (void)
void type represents the absence of any value
typically used as the return type of functions that do not return a value
Example of void type: */

function logMessage(message: string): void {    
    console.log(message);
}
logMessage('This is a void function'); //void function usage


/* 2.function Retrun Type = Never 
never type represents values that never occur 
e.g., a function that always throws an error or never returns
Example of never type:*/

function throwError(message: string): never {
    throw new Error(message);
} 

/* 3.function Return Type = int 
Example : int function with parameters and return type */

function calculas(x:number,y:number):number {
     return x+y;
}

/*4. function Return Type = any
Any function with parameters and return type */

function addNumStr(x:number | string,y:number | string):any {
    if(typeof x === 'number' && typeof y === 'number'){ 
    return x+y;
    } else {
        return x.toString() + y.toString();
    }   
};
console.log(`Calculas Function: 5 + 10 = ${calculas(5,10)}`);
console.log(`AddNumStr Function with numbers: 5 + 10 = ${addNumStr(5,10)}`);
console.log(`AddNumStr Function with strings: 'Hello' + 'World' = ${addNumStr('Hello','World')}`);

