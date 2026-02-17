function evenNumber (num, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {    
                resolve(`Even number: ${num}`);
            } else {
                reject(`Not an even number: ${num}`);
            }   
        }, delay);
    }); 
}

evenNumber(2, 1000)
    .then((result) => {
        console.log(result);
        return evenNumber(3, 1000); 
    })
    .then((result) => {
        console.log(result);    
       // return evenNumber(6, 1000);
    })
    .catch((error) => {
        console.error(error);
    });
