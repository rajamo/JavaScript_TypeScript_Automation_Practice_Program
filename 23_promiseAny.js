//*** Promise.Any() */
// The Promise.any() method returns a promise that fulfills as soon as any of the promises in an iterable fulfills,
// with the value of the fulfilled promise. If all of the given promises are rejected, then the returned promise is rejected
// with an AggregateError, a new subclass of Error that groups together individual errors.
// It is useful when you want to proceed with the first successful result among multiple asynchronous operations.
// Usage: Promise.any([promise1, promise2, promise3, ...])  

//other words, it waits for the first promise to be fulfilled and ignores rejected promises.
// 

/*| Feature       | Promise.all          | Promise.any            |
| ------------- | -------------------- | ---------------------- |
| Resolves when | All promises resolve | First promise resolves |
| Rejects when  | Any promise rejects  | All promises reject    |
| Resolve value | Array of results     | Single value           |
| Reject value  | Single error         | `AggregateError`       |
| Use case      | All-or-nothing       | First-success-wins     |*/


//When to use

/*You only need one successful result

Failures are acceptable as long as something succeeds

Examples:

Fetching from multiple mirrors/CDNs

Using fallback APIs or services */

//funx - rejected
//funy - rejected   
//funz - resolved

const funx = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("Error in funx");
        },200)

    });

};

const funy =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved funy");
        },300);
    });
};

const funz =() =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            reject("Error in funz");
        },100);
    });
};

Promise.any([funx(), funy(), funz()])
.then(dataArry => {
    console.log("First fulfilled promise value:", dataArry);
})
.catch(Error => {
    console.log("All promises were rejected. AggregateError:", Error);  
});



