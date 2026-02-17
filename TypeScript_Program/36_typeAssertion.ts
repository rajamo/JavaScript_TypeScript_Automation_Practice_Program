// type assertion is type caste

// use as keyword


let billamount: any = 123;
let finalbill =  billamount as number+ 100;
console.log(finalbill);

//2. using 'as' keyword

let names:any ="Welcome to the happy world";
let count = (names as string).length;
console.log(count);


