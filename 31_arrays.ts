// Define type of the array in TS.

let employee :Array<string>  = ["John", "Jane", "Doe"]; // recommended way to define array type in TS
let car: Array<string> = ["BMW", "Audi", "Mercedes"];
let id: Array<number> = [101, 102, 103];
let mixed : Array<number | string> = [1, "Two", 3, "Four"]; // array of number or string only 
let AnyArray: Array<any> = [1, "Two", true, 4.5]; // array of any type
let boolArray: Array<boolean> = [true, false, true];
let tupleArray: Array<[number, string]> = [
    [1, "One"],
    [2, "Two"],
    [3, "Three"]
];


let numList: number[] = [10, 20, 30, 40]; // another way to define array type in TS
let animallist: string[] = ["Dog", "Cat", "Elephant"]; // another way to define array type in TS bt not recommended

console.log("Employee Names:"); 
employee.forEach((emp) => {
    console.log(emp);
});

console.log("Car Brands:");         //#endregion        
car.forEach((c) => {
    console.log(c);
});

// Tuple: fixed number of elements with different types
// let person: [string, number, boolean] = ["Alice", 30, true];
// console.log(`Person Name: ${person[0]}, Age: ${person[1]}, Is Employed: ${person[3]}`);
// Accessing tuple elements
// let personName1: string = person[0];
// let personAge1: number = person[1];
// let isEmployed12: boolean = person[2];    
// console.log(`Accessed Tuple Elements - Name: ${personName1}, Age: ${personAge1}, Employed: ${isEmployed12}`);

// Array of Tuples
let employees: [number, string][] = [
    [1, "John"],        
    [2, "Jane"],
    [3, "Doe"]
];
console.log("Employee List:");
employees.forEach(([id, name]) => {
    console.log(`ID: ${id}, Name: ${name}`);
});
// Accessing elements in array of tuples
employees.forEach((emp) => {
    let empId: number = emp[0];
    let empName: string = emp[1];
    console.log(`Accessed Employee - ID: ${empId}, Name: ${empName}`);
}); 
// Nested Tuples
let department: [string, [number, string][]] = [
    "IT",   
    [
        [1, "John"],
        [2, "Jane"]     
    ]
];
console.log(`Department: ${department[0]}`);
console.log("Employees in Department:");
department[1].forEach(([id, name]) => {
    console.log(`ID: ${id}, Name: ${name}`);
}
);
// Accessing elements in nested tuples
let deptName: string = department[0];
console.log(`Accessed Department Name: ${deptName}`);
department[1].forEach((emp) => {
    let empId: number = emp[0];
    let empName: string = emp[1];
    console.log(`Accessed Employee - ID: ${empId}, Name: ${empName}`);
});

 