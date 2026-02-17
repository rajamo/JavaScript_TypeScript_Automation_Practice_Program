//1.create async function without await steps
async function f1() {
    console.log("this is async function f1 without await steps.");
    return 42;
};

f1().then(results=>{
    console.log(results);

});
console.log("***********************************");
//2.create async function without await steps and with Error
async function f2() {
    console.log("this is async function f2 without await steps and with Error.");
    throw new Error("Something went wrong in f2");
};

f2().catch (error => {
    console.log(error.message);
});

console.log("***********************************");
//3. function 1 with promise then call that function 1 using await inside async function2
function getInfo(){
    return new Promise ((resolve, reject)=>{
        const randomNum = Math.random();
        setTimeout(() =>{
            if(randomNum < 0.5){
                resolve(randomNum);
            } else {
                reject(new Error("Failed to retrieve info."));
            }
        }, 2000)
    });
}

//async function2 to call getInfo with await
async function fetchInfo(){
    try{
        const result = await getInfo();
        console.log("Info retrieved:", result);
    }
    catch(error){
        console.log("Error:", error.message);
    }
}
fetchInfo();
console.log("***********************************");