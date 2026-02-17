


///JavaScript have only 2 Variables Let and const.  Var (depricated)
// Let is uesed to when variable value changes and not allowed RE Declarion  // Hoisting is Allowed with RT Error 
// Const is used when variable value is constant but object/array properties can be changed even if the object/array is declared as const
// Const - Allway Declare as CAPITAL - like URL, Days, PI etc., 
// Var is depricated, avoid using var and ALLOWD to Re declared many time. // Hoisting allowed without RT Error 

console.log('********** Let  **********************');
for (let i=0; i<5; i++){
 console.log(i);
};    

console.log('********** Const **********************');

const Locator = "xpatth=//input[@name='username']";
// Locator = "id=username"; --> This will throw an error as Locator is a const
console.log(Locator);

const person ={
    firstname:"raja",
    age: 40
};
console.log(person.age);
person.age=41; // This is allowed
console.log(person.age);
console.log(person);


