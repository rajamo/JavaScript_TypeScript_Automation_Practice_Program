// 1. Premitive Data type : Simple ; Number, string, boolean , BigInt, Null, undefine 
// 2. Non premitivie : Reference ;  - array, Objects, interface, class

// Number : Size - 8 byets for all number in a variable 
//String : Size 2 byets for each character 
//Boolean : Size 1 bytes = 8 bits

let longData = 1233455555666n;  // BigInt end with n;
console.log( typeof longData); // BigInt

//otherway 
let sam = BigInt (100);
console.log(sam); // 100n;
console.log(typeof sam); // BigInt

//Safe min and Max values of Number
let min = Number.MIN_SAFE_INTEGER;  // min vale 2power of 53
let max = Number.MAX_SAFE_INTEGER // max value if go beyond then use BigInt

//Null : Size 0 to 8 bytes - depends on JS engine 

let x = null;
console.log( typeof x); // Object -- but this is KNOWN JS issue it should be Null 