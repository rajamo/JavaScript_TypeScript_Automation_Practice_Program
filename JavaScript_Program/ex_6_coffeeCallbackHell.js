//1.Starting the coffee machine  - 2 Seconds
//2.Grinding coffee beans - 1 Second
//3.Boiling water - 2 Seconds
//4.pouring coffee - 0.5 Second
//5.add ground coffee to cup - 0.5 Second
//6.Stirring the coffee - 0.3 Second
//7.Enjoy your coffee!

const { Console } = require("console");

function startmachine(callback){
    console.log("Starting the coffee machine...");
    setTimeout(function(){
        console.log("Machine is ready!");
        callback('Coffee machine is started');
    }, 2000); 
};

function grindCoffeeBeans(callback){
    console.log("Grinding coffee beans...");
    setTimeout(function(){
        console.log("Coffee beans are ground!");
        callback('Coffee beans are ground!');
    }, 1000);
};

function boilWater(callback){
    console.log("Boiling water...");
    setTimeout(function(){
        console.log("Water is boiled!");
        callback('Water is boiled!');
    }, 2000);
};

function pourCoffee(callback){
    console.log("Pouring coffee...");   
    setTimeout(function(){
        console.log("Coffee is poured!");
        callback('Coffee is poured!');
    }, 500);
};

function addGroundCoffeeToCup(callback){    
    console.log("Adding ground coffee to cup...");
    setTimeout(function(){
        console.log("Ground coffee added to cup!");
        callback('Ground coffee added to cup!');
    }, 500);
};
function stirCoffee(callback){
    console.log("Stirring the coffee...");          
    setTimeout(function(){
        console.log("Coffee is stirred!");
        callback('Coffee is stirred!');
    }, 300);
};

function enjoyCoffee(){
    console.log("Enjoy your coffee!");
};

//Executing the coffee making process in sequence using callbacks hell 
/*startmachine(function(){
    grindCoffeeBeans(function(){
        boilWater(function(){
            pourCoffee(function(){
                addGroundCoffeeToCup(function(){
                    stirCoffee(function(){
                        enjoyCoffee();
                    });
                });
            });
        });
    });
});*/


//the above same using arrow functions with hell callback


startmachine(() =>{
    grindCoffeeBeans(()=> {
        boilWater(() => {
            pourCoffee(() => {
                addGroundCoffeeToCup(() => {
                    stirCoffee(() => {
                        enjoyCoffee();
                    });
                });
            });
        });
    });
});