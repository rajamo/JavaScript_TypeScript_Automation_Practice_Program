
//Data types in TypeScript

/*TS is a statically typed language, which means that types are checked at compile time. This helps catch errors early and improves code quality.
//TypeScript provides various data types to define the shape and behavior of data in your applications.
//Which highlights the issue of dynamic typing in JavaScript and how TypeScript addresses it with static typing.

//types in TypeScript can be broadly categorized into:
//  Primitive types: 1.boolean, 2.number, 3.string, 4.null, 5.undefined, 6.symbol, 7.bigint
//  Object types: arrays, tuples, enums, classes, interfaces
//  Special types: any, void, never, unknown */

console.log("----annotated Data Types in TypeScript----");
//Type annotation: explicitly specifying the type of a variable.
let fname: string = "Alice"; //string type
let age1: number = 25; //number type
let flag : boolean = true; //boolean type
let empty: null = null; //null type
let notdefined:undefined = undefined; //undefined type

console.log("----Type Inference in TypeScript----");
//Type inference: TypeScript automatically infers the type based on the assigned value.
let city = "New York"; //inferred as string --> will be corrected while compiling time of TS
let score = 100; //inferred as number 


console.log("----Any Data Types in TypeScript----");
//Data Types in TypeScript:
let data: any = 67;
data = "Now I'm a string"; //no error, type can change
data = true; //no error, type can change
console.log(`Data value: ${data}`); 


//1.Annotating Data Types
//2.Primitive Data Types
//3.Array  
//4.Tuple
//5.Enum
//6.Any
//7.Void
//8.Null and Undefined
//9.Never
//10.Object
//11.Type Assertion
//12.Union Types
//13.Intersection Types
//14.Literal Types
//15.BigInt
//16.Symbol
//17.Unknown
//18.Array with Union Types
//19.Readonly Array 
//20.Function Types
//21.Optional Properties
//22.Default Parameters 
//23.Rest Parameters
//24.Destructuring with Types
//25.Mapped Types
//26.Conditional Types
//27.Template Literal Types
//28.Keyof Operator
//29.Typeof Operator
//30.Index Types
//31.Non-Null Assertion Operator    


console.log("--------------Primitive Data Types----------");
//1. Primitive Data Types   
let isDone: boolean = false; //boolean
let age: number = 30; //number
let firstName: string = "John";
let lastName: string = 'Doe'; //string
let fullName: string = `${firstName} ${lastName}`; //template string

//2. Array
let numbers: number[] = [1, 2, 3, 4, 5]; //array of numbers
let fruits: Array<string> = ['Apple', 'Banana', 'Orange']; //generic array of strings   
//3. Tuple
let person: [string, number] = ['Alice', 25]; //tuple with string and number
//4. Enum
/*enum Color {
    Red,
    Green,
    Blue
};*/
//let favoriteColor: Color = Color.Green; //enum usage   

//5. Any
let randomValue: any = 10; //can be of any type
randomValue = 'Hello';
randomValue = true; //no type checking
  
//throwError('This is a never function'); //never function usage
//9. Object
let user: { name: string; age: number } = {
    name: 'Bob',    
    age: 28
}; //object type
//10. Type Assertion
let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length; //type assertion
console.log(`String length: ${strLength}`); 
//11. Union Types
let multiType: number | string;
multiType = 20;
multiType = 'Twenty';
//12. Intersection Types
interface Person {
    name: string;
    age: number;
}
interface Employee {    
    employeeId: number;
}
type Staff = Person & Employee;
let staffMember: Staff = {
    name: 'Charlie',
    age: 32,
    employeeId: 101
};

console.log(`Staff Member: ${staffMember.name}, Age: ${staffMember.age}, Employee ID: ${staffMember.employeeId}`);
//13. Literal Types
let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up';
//direction = 'forward'; //Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'
console.log(`Direction: ${direction}`);
//14. BigInt
let bigIntValue: bigint = 9007199254741991n; //bigint type
console.log(`BigInt Value: ${bigIntValue}`);    
//15. Symbol
let sym1: symbol = Symbol('sym1');
let sym2: symbol = Symbol('sym2');
console.log(`Are sym1 and sym2 equal? ${sym1 === sym2}`); //false, each symbol is unique
//16. Unknown
let unknownValue: unknown;
unknownValue = 10;
unknownValue = 'Hello'; 
//unknownValue = true; //can be assigned any type
// To use unknown type, we need to do type checking
if (typeof unknownValue === 'string') {
    console.log(`Unknown value is a string of length: ${unknownValue.length}`);
}
//17. Array with Union Types
let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
console.log('Mixed Array:', mixedArray);
//18. Readonly Array
let readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];
//readonlyArray.push(6); //Error: Property 'push' does not exist on type 'readonly number[]'
console.log('Readonly Array:', readonlyArray);
//19. Function Types
let add: (x: number, y: number) => number;  
add = (x: number, y: number): number => x + y;
console.log(`Sum: ${add(5, 10)}`);
//20. Optional Properties
interface Car {
    make: string;
    model: string;
    year?: number; //optional property
}
let myCar: Car = {
    make: 'Toyota',
    model: 'Camry'
};
console.log(`Car: ${myCar.make} ${myCar.model}`);   
//21. Default Parameters
function greet(name: string = 'Guest'): string {
    return `Hello, ${name}!`;
}   

console.log(greet()); //Hello, Guest!
console.log(greet('Alice')); //Hello, Alice!
//22. Rest Parameters
function multiply(factor: number, ...numbers: number[]): number[] {
    return numbers.map(num => num * factor);
}   
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
//23. Destructuring with Types
let point: { x: number; y: number } = { x: 10, y: 20 };
let { x, y }: { x: number; y: number } = point;
console.log(`X: ${x}, Y: ${y}`);    
//24. Mapped Types
type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];    
};
let readonlyPerson: ReadonlyPerson = {
    name: 'David',  
    age: 40
};
console.log(`Readonly Person: ${readonlyPerson.name}, Age: ${readonlyPerson.age}`);
//readonlyPerson.age = 41; //Error: Cannot assign to 'age' because it is a read-only property   

//25. Conditional Types
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
//console.log(`Is string (Test1): ${Test1}, Is string (Test2): ${Test2}`);

//26. Template Literal Types
type Greeting = `Hello, ${string}!`;
let greetMessage: Greeting = 'Hello, World!';
console.log(greetMessage);  
//27. Keyof Operator
type PersonKeys = keyof Person; // "name" | "age"
let key: PersonKeys = 'name';
console.log(`Person Key: ${key}`);
//28. Typeof Operator
let sampleString = 'Sample';
type SampleStringType = typeof sampleString; // string
let anotherString: SampleStringType = 'Another Sample';
console.log(`Another String: ${anotherString}`);
//29. Index Types
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
let personName = getProperty(staffMember, 'name');
console.log(`Person Name from getProperty: ${personName}`);
//30. Non-Null Assertion Operator
let nullableString: string | null = 'Hello';
let nonNullString: string = nullableString!; //asserting it's not null
console.log(`Non-Null String: ${nonNullString}`);   
// End of Data Types in TypeScript
//-----------------------------------------------------------------
console.log("--------------End to TypeScript Data Types----------");
