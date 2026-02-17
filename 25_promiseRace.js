//**Promise.race */
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
// with the value or reason from that promise.
// It is useful when you want to proceed with the result of the first completed promise among multiple asynchronous operations.
// Usage: Promise.race([promise1, promise2, promise3, ...])

//funA - resolved after 300ms
//funB - resolved after 100ms
//funC - rejected after 200ms

const funA =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("funA resolved");
        }, 300);
    });
};

const funB =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("funB resolved");
        }, 100);
    });
};

const funC =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Err in funC");
        }, 200);
    });
};

Promise.race([funA(), funB(), funC()])
.then(result => {
    console.log("First settled promise result:", result);
})
.catch(error => {
    console.log("First settled promise error:", error);
});