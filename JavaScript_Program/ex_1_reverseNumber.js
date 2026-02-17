//Reverse the given number %10##

function reverseNum(number){
    if(number>0 && number<=9){
        return number;
    }
     var reserved =0;
    while (number>0){
        reserved = reserved * 10 + number % 10;
        number = Math.floor(number/10);
    }
    return reserved;
};

const number = 12345;
const reversedNumber = reverseNum(number);
console.log("Original Number: " + number);
console.log("Reversed Number: " + reversedNumber);
//
