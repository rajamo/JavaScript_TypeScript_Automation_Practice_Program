//Java script introdcue the concept of async and await to handle promises more efficiently.
//Async functions always return a promise. If the function returns a value, the promise will be resolved with that value.
//If the function throws an error, the promise will be rejected with that error.    
//The await keyword can only be used inside async functions. It makes JavaScript wait until the promise is resolved and returns the result.
//If the promise is rejected, it throws the rejected value.
// It is useful to write cleaner and more readable asynchronous code, avoiding the "callback hell" problem.
// Usage: 
// async function myFunction() {
//    let result = await somePromise;
//    console.log(result);

//Promise = the actual async result container

//async/await = a nicer way to work with Promises

//-----------------------------------------------------------------
//✅ Callback = “run this later”
//✅ Promise = “I promise I’ll return result later”
//✅ Async/Await = “wait for the promise result like normal code”
//-----------------------------------------------------------------


/* Callback Hell is inside loops or nested functions where each function depends on the result of the 
previous one, leading to deeply nested and hard-to-read code.*/

/* To avoid callback hell, we can use async/await to write asynchronous code in a more synchronous manner along wiht promises.*/

//Pyramid of doom and callback hell example
asyncfunction1( (result1) => {
    asyncfunction2(result1, (result2) => {
        asyncfunction3(result2, (result3) => {
            asyncfunction4(result3, (finalResult) => {
                console.log("Final Result:", finalResult);
                //More nested callbacks can go here
            });
        });
    });
});

/*Example of Promise for better readability and maintainability*/

asyncFunction()
.then(result1 => asyncFunction2(result1))
.then(result2 => asyncFunction3(result2))
.then(result3 => asyncFunction4(result3))
.then(finalResult => {
    console.log("Final Result:", finalResult);
})
.catch(error => {
    console.error("Error:", error);
});


//Better and improved way using async/await

// Simulated asynchronous functions returning promises
//Example using async/await in Promise to avoid callback hell

async function myFunction(){
    try{
        const result1 = await asyncFunction();// 500ms await here to resolve asyncFunction
        const result2 = await asyncFunction2(result1);// 600ms await here to resolve asyncFunction2
        const result3 = await asyncFunction3(result2);// 700ms await here to resolve asyncFunction3
    }
    catch (error){
        console
    }
};