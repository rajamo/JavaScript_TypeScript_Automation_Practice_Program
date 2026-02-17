//**** Promise.all() - if all promises resolve, it returns an array of resolved values */
// If any promise one reject, it returns the reason of the first rejected promise even if other promises are resolved.
// It is used to run multiple promises in parallel and wait for all of them to complete.
// It is useful when you have multiple asynchronous operations that can be performed concurrently, 
// and you want to wait for all of them to finish before proceeding.
//  Usage: Promise.all([promise1, promise2, promise3, ...])
// 

/*| Feature       | Promise.all          | Promise.any            |
| ------------- | -------------------- | ---------------------- |
| Resolves when | All promises resolve | First promise resolves |
| Rejects when  | Any promise rejects  | All promises reject    |
| Resolve value | Array of results     | Single value           |
| Reject value  | Single error         | `AggregateError`       |
| Use case      | All-or-nothing       | First-success-wins     |*/

/*When to use

You need all results to continue

One failure should fail the entire operation

Examples:

Loading multiple API calls that must all succeed

Fetching configuration + user data together*/

//function1 -- A function that returns a promise which resolves
//function2 -- A function that returns a promise which resolves 
//function3 -- A function that returns a promise which resolves

/*const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const arr = [1,2,3];
            resolve (arr);
        },100);
    });

};

const function2 =() =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const arr = [4,5,6];
            resolve(arr);
        },100);
    });

};

const function3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const arr = [7,8,9];
            resolve(arr);
        },100);
    });
};

Promise.all([function1(), function2(), function3()])
.then(dataArray => {
     console.log("resolved all promise:",dataArray)
})
.catch(error => {
    console.log("Not resloved all promise:", error);
}); */


//fun 4-- reolved 
//fun 5-- Rejected
//fun 6-- resolved

const fun4 =() => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(" resolved fun4");
        },100);
    });
};

const fun5 =() => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            reject("Err in fun5");
        },100);
    });
};

const fun6 =() => {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            resolve("fun6 resolved");
        },100);
    });
};

Promise.all([fun4(), fun5(), fun6()])
.then (dataArray => {
    console.log ("Resolved all promise:",dataArray);
})
.catch (Error =>{
    console.log("not solved all or one promise:",Error)
});

