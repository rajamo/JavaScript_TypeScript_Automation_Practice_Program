const fs = require('fs');

fs.readFile('TxtFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        console.log("Error reading file."); // print if there is an error
        return;
    }
    else if (data) {
        console.log(data); // print the content of the file after 2 seconds
        console.log("File read completed."); // print after reading the file
        return;
    }
});
console.log("File read initiated."); // print first before reading the file
