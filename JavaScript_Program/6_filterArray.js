const commnity = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" },
];

// Filter members older than 26
const filteredMembers1 = commnity.filter((member) => member.age > 26);
const filteredMembers = commnity.filter((member) =>
{
    return (member.age>26);
});

console.log("Members older than 26:",filteredMembers);
console.log("Members older than 26:", filteredMembers1); // creates a new array with all elements that pass the test implemented by the provided function


//Reudece method
let num = [1,2,3,4,5];
let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 


    console.log("Sum of numbers:", sum); // outputs: Sum of numbers: 15


// find the big number from the array
let top = [10,3,45,7,23,99];
let bigNumber = top.reduce((max, current) => max > current ?  max: current);
console.log("Biggest number is:", bigNumber); // outputs: Biggest number is: 45

let minnum = top.reduce((min, num)=>
{
    if (min<num)
    {
        return min;
}
else {
    return num;
}

});

console.log("Smallest number is:", minnum); // outputs: Smallest number is: 3

let cartitem = [
    {name:"laptop", price:800}, 
    {name:"phone", price:500}, 
    {name:"tablet", price:300}
];
let totalPrice = cartitem.reduce((total, item) => total + item.price, 0);
console.log("Total price of cart items:", totalPrice); // outputs: Total price of cart items: 1600  

