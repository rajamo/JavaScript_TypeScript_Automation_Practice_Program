//1.Starting the coffee machine  - 2 Seconds
//2.Grinding coffee beans - 1 Second
//3.Boiling water - 2 Seconds
//4.pouring coffee - 0.5 Second
//5.add ground coffee to cup - 0.5 Second
//6.Stirring the coffee - 0.3 Second
//7.Enjoy your coffee!


function startmachinePromise(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log("Starting the coffee machine...");
                resolve('Coffee machine is started');
        }, 2000);
    });
};

function grindCoffeeBeansPromise(){
    return new Promise((resolve) => {
        console.log("Grinding coffee beans...");
        setTimeout(() =>{
            console.log("Coffee beans are ground!");
            resolve('Coffee beans are ground!');
        }, 1000);
    });
};

function boilWaterPromise(){
    return new Promise((resolve) => {
        console.log("Boiling water...");
        setTimeout(() =>{
            console.log("Water is boiled!");
            resolve('Water is boiled!');
        }, 2000);
    });
};

function pourCoffeePromise(){
    return new Promise((resolve) => {
        console.log("Pouring coffee...");   
        setTimeout(() =>{
            console.log("Coffee is poured!");
            resolve('Coffee is poured!');
        }, 500);
    });
};

function addGroundCoffeeToCupPromise(){
    return new Promise((resolve) => {
        console.log("Adding ground coffee to cup...");
        setTimeout(() =>{
            console.log("Ground coffee added to cup!");
            resolve('Ground coffee added to cup!');
        }, 500);
    });
};

function pourCoffeePromise(){
    return new Promise((resolve) => {
        console.log("Pouring coffee...");   
        setTimeout(() =>{
            console.log("Coffee is poured!");
            resolve('Coffee is poured!');
        }, 500);
    });
};

function addGroundCoffeeToCupPromise(){
    return new Promise((resolve) => {
        console.log("Adding ground coffee to cup...");
        setTimeout(() =>{
            console.log("Ground coffee added to cup!");
            resolve('Ground coffee added to cup!');
        }, 500);
    });
};  
function stirCoffeePromise(){
    return new Promise((resolve) => {
        console.log("Stirring the coffee...");                  
        setTimeout(() =>{
            console.log("Coffee is stirred!");
            resolve('Coffee is stirred!');
        }, 300);
    });             
};

function enjoyCoffee(){
    console.log("Enjoy your coffee!");
};
