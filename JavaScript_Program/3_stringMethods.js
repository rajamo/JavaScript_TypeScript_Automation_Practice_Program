//String operations
let str = "Hello, World!";
console.log(str.length); // Length of the string
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase  

console.log('************Index of********************');

let den = 'JavaScript';
console.log(den [2]); // Access character at index 2
console.log(den.charAt(4)); // Access character at index 4
console.log(den.indexOf('S')); // Find index of character 'S'
console.log(den.indexOf('P')); // Find index of character 'P' (not found, returns -1)
console.log(den.lastIndexOf('a')); // Find last index of character 'a'


console.log('**********Concat**********************');

console.log(den.concat(' is fun!')); // Concatenate strings

console.log('**********Replace**********************');

console.log(den.replace('Java', 'Type')); // Replace 'Java' with 'TypeScript' for first occurrence
console.log("21-06-23".replaceAll('-', '/')); // Replace '-' with '/' for all occurrence

console.log('**********SubStrings**********************');

// Slice more powerful than substring used in string + array and also support -ve index
// Substring does not support -ve index but can swap indexes if first is greater than second

//let den = 'JavaScript';
//           0123456789

console.log(den.substring(4,10)); // Extract substring from index 4 to 9
console.log(den.substring(10,4)); // Extract substring from index 4 to 9

console.log('*************slice*******************');

console.log(den.slice(0,4)); // Extract substring from index 0 to 4 // Java
console.log(den.slice(2,-4)); // Extract substring from index 2 to -4 (-ve reverse) //vaScri
console.log(den.slice(-5,8)); // Extract substring from index -5 (convert to index 5) to -4 (-ve reverse)// cri

console.log('************Split********************');

console.log(den.split('')); // Split string into array of characters
console.log(den.split('a')); // Split string at each 'a'

console.log('************Search********************');

console.log(den.includes('Script')); // Check if string includes 'Script' // true 
console.log(den.startsWith('Java')); // Check if string starts with 'Java' // true
console.log(den.endsWith('Script')); // Check if string ends with 'Script' // true 
console.log (den.search('a')); // Search for 'a' in the string // true 

console.log('**********Trim**********************');

console.log(den.trimStart()); // Remove whitespace from start
console.log(den.trimEnd()); // Remove whitespace from ends
console.log(den.trim()); // Remove whitespace from both ends

console.log('**********Repeat**********************');
console.log(den.repeat(2)); // Repeat the string twice      
console.log('***********Pad*********************');
console.log(den.padStart(15,'%')); // Pad the string at the start to a total length of 15 with '*'
console.log(den.padEnd(15,'-')); // Pad the string at the end to a total length of 15 with '-'  




