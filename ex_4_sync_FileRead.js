// The below  code reads the content of 'TxtFile.txt' synchronously.
const fs = require('fs');

const data = fs.readFileSync('TxtFile.txt', 'utf-8');
console.log(data); // print the content of the file first 
console.log("File read completed."); // print after reading the file

