console.log("---------- Spread Operator --------------------");
//1. Using Set to store unique values for an array
console.log("==Using Set to store unique values==");
const arr = ['HR','Finance','IT', 'IT', 'Marketing', 'HR'];
const dep = [...new Set(arr)]; // ...spread operator to convert set back to array
console.log("Unique Departments:", dep); // outputs: Unique Departments: [ 'HR', 'Finance', 'IT', 'Marketing' ]


console.log("---------- Into to String --------------------");
//2.Int to string conversion    
const numb1 = 12;
const str1 = "welcome";
const convertedstr = numb1+str1; // method 1: using + operator
const convertedstr1 = numb1.toString(); // method 2: using toString() method
const convertedstr2 = String(numb1); // method 3: using String() function
console.log("Converted String using + operator: ", convertedstr, typeof(convertedstr)); // outputs: Converted String using + operator:  12welcome
console.log("Converted String using toString(): ", convertedstr1, typeof(convertedstr1)); // outputs: Converted String using toString():  12
console.log("Converted String using String(): ", convertedstr2, typeof (convertedstr2)); // outputs: Converted String using String():  12


console.log("---------- String to Integer and Float --------------------");
//3. String to interger && Float conversion [parserInt, parseFloat methods]
const stri1 = "34.56";
const str2 = "89";
const int1 = parseInt(str2);
const flot1= parseFloat(stri1);
console.log("String to Integer using parseInt():", int1, typeof(int1)); // outputs: String to Integer using parseInt(): 78 number
console.log("String to Float using parseFloat():", flot1, typeof(flot1)); // outputs: String to Float using parseFloat(): 34.56 number

console.log("---------- float to Integer --------------------");
//3.flot to int conversion
 const flotnum = 12.67;
const intnum1 = parseInt(flotnum); // method 1: using parseInt() function


console.log("---------- float to Integer --------------------");
//4.Check is the number is integer or not
const numX= 3.4;
if(typeof numX === 'number' && !isNaN(numX))
{
    console.log(numX, "is an number");
 
}
else {
    console.log(numX, "is not a number but a", typeof numX);
}


//5. Swap two variable without using a temporary variable
let ax = 3; 
let bx =5;
console.log("before swap a:", ax, "b:", bx); // outputs: before swap a: 5 b: 3
[ax,bx] = [bx,ax];
console.log("after swap a:", ax, "b:", bx); // outputs: after swap a: 5 b: 3


    
//11. Generate a random number between two values [:: Math.random() method]
console.log("==Generate a random number between two values==");
const min = 5;
const max = 10;
const randonnum = Math.floor(Math.random()*(max-min+1))+min;
console.log("Randomnumber", randonnum); // outputs a random number between 5 and 10 inclusive")

//17. Get current date and time [:: Date() object]
console.log(" ==Get current date and time==");
const getDate = new Date();
const localDate = getDate.toLocaleDateString();
const localTime= getDate.toLocaleTimeString();
const bothDateTime = getDate.toLocaleString();  
console.log("Current Date and Time:", bothDateTime); // outputs: Current Date and Time: mm/dd/yyyy, hh:mm:ss AM/PM
console.log("Current Date:", localDate); // outputs: Current Date: mm/dd/yyyy
console.log("Current Time:", localTime); // outputs: Current Time: hh:mm:ss AM/PM


//18.check variable is defined or not [:: typeof operator]
console.log("==Check variable is defined or not==");
let xyz;

if (typeof xyz !== 'undefined'){
    console.log("variable is defined");
}
else {console.log("variable is not defined");

}






