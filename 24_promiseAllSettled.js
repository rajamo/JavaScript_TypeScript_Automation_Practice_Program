//**Promise.allSettled -  *//
// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected,
// with an array of objects that each describes the outcome of each promise.
// It is useful when you want to wait for multiple asynchronous operations to complete, regardless of whether they succeed or fail.
// Usage: Promise.allSettled([promise1, promise2, promise3, ...])

//fun1 - resolved
//fun2 - rejected

const fun1 =() => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("fun1 resolved");
        },100);
    });
};

const fun2 =() => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            reject("Err in fun2");
        },100);
    });
};

Promise.allSettled([fun1(),fun2()])
.then(dataArry => {
    dataArry.forEach (result => {
        if (result.status === "fulfilled") {
            console.log("Promise fulfilled with value:", result.value);
        }
        else{
            console.log("Promise rejected with reason:", result.reason);
        }
    })
});