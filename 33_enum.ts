//Enum - Enumeration - Data Type - Holds the sets of Constants for 1. Numeric 2. String 3. Heterogenous (Alphanumeric)

console.log ("---- Number Enum----------");
enum Browser{
    Chrome, 
    Firefor, 
    Edge, 
    Safari
}
console.log(Browser.Chrome); // O/p = 0

//this above TS code won't support for .ts compiler will it run only in .js compiler becuase enum data type


console.log (Browser); 


enum BrowserNew{
    Chrome=5, 
    Firefor, 
    Edge, 
    Safari
}
console.log(BrowserNew.Chrome); // O/p = 5
console.log(BrowserNew.Firefor); // O/p = 6
console.log (BrowserNew);

console.log ("---- String Enum----------");

enum enivornment {
    Dev = "DEV",
    Test = "TEST",
    Prod = "PPD"
}

console.log (enivornment.Test) // o/p - TEST
console.log (enivornment['Prod']) // o/p - PPD

console.log ("---- Heterogenous Enum----------");

enum Status {
    Active = 'ACTIVE',
    Blocked = 1,
    Open,
}

console.log (Status.Active); //ACTIVE
console.log (Status.Blocked); //1
console.log(Status.Open); // 2

