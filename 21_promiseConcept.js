
//Promise concept in JavaScript
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its
//  resulting value.
// A Promise is in one of these states:
// 1.Pending: Initial state, neither fulfilled nor rejected.
// 2.Fulfilled: The operation completed successfully with Value
// 3.Rejected: The operation failed with Reason (error).


//Promise = the actual async result container
//async/await = a nicer way to work with Promises

//-----------------------------------------------------------------
//✅ 1.Callback = “run this later”
//✅ 2.Promise = “I promise I’ll return result later”
//✅ 3.Async/Await = “wait for the promise result like normal code”
//-----------------------------------------------------------------

//Creating a Promise
 const myPromise = new Promise ((resolve, reject) => {

    setTimeout(() => {
        const randamValue = Math.random();
        console.log("Random Value: ", randamValue);
        if (randamValue > 0.5) {
            resolve(randamValue); // Fulfilled state
        }
        else {
            // reject(error("Value is less than or equal to 0.5")); // Rejected state
            reject("Value is less than or equal to 0.5 and value is " + randamValue); // Rejected state
        }

    }, 2000); // Simulating an asynchronous operation with a 2-second delay

 });

 myPromise
    .then((resulting) => {
        console.log("Promise fulfilled with value: ", resulting);
    })
    .catch((error) => {
        console.error("Promise rejected with reason: ", error);
    })
    
    .finally(() => {
        console.log("Promise has been settled");
    }); 

// Output Explanation:
// When you run this code, it creates a Promise that simulates an asynchronous operation using setTimeout.
// After a 2-second delay, it generates a random value between 0 and 1. 
// If the value is greater than 0.5, the Promise is resolved (fulfilled) with that value. 
// If the value is 0.5 or less, the Promise is rejected with an error.
// The .then() method handles the fulfilled case, the .catch() method handles the rejected case, 
// and the .finally() method executes code that runs regardless of the Promise's outcome.   
// Note: You can run this code multiple times to see both fulfilled and rejected outcomes based on the random value generated.  
// Note: Make sure to run this code in an environment that supports JavaScript, such as a web browser console or Node.js.   




