//1.Object literal notation
let person1 = {
    name: "John",   
    age: 30,
    location: "New York",
};
console.log("Person1:", person1); // outputs: Person1: { name: 'John', age: 30, location: 'New York' }
console.log(person1.location); // outputs: New York
console.log(person1['location']); // 

//2. constructor  function and Object creation
function person2(name,age,location){
    this.name = name;
    this.age = age;
    this.location = location;
}
let p = new person2("Alice",25,"Los Angeles");
console.log("Person2:", p); // outputs: Person2: person2 { name: 'Alice', age: 25, location: 'Los Angeles' }
console.log(p.name); // outputs: Alice  

// Class style Object creation

class person3{
    constructor(name,age,location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    employeedetails(){
        return `name is : ${this.name}, age: ${this.age}, location: ${this.location}`;
        console.log(`name: ${this.name}`);
    }
}

const p3 = new person3("Bob",28,"Chicago");
//console.log("Person3:", p3.employeedetails()); // outputs: Person3: name is : Bob, age: Bob, location: Chicago
p3.employeedetails(); // outputs: name: Bob

//4. Object.create() method

const animalPrototype = {
    printdetails: function(){
        return `animal name is: ${this.name}`;
    }
};

const ani = Object.create(animalPrototype);
ani.name = "Lion";
console.log("Animal Details:", ani.printdetails()); // outputs: Animal Details: animal name is: Lion    


console.log("---- Factory Function ----");
//5. Factory function -- Returns object always.

function depaertment (DepName, Hod) {
    return {
        DepName :DepName,
        Hod: Hod,
        getdetails: function(){
            return `Department Name is: ${this.DepName}, HOD is: ${this.Hod}`;

        }
    }
}

const dep = depaertment("Computer Science","Dr. Smith");
const dep1 = depaertment("Mathematics","Dr. Jones");
console.log("Department 1 Details:", dep.getdetails()); // outputs: Department 1 Details: Department Name is: Computer Science, HOD is: Dr. Smith
console.log("Department 2 Details:", dep1.getdetails()); // outputs: Department 2 Details: Department Name is: Mathematics, HOD is: Dr. Jones


//6.check if an object has a property
console.log("==Check if an object has a property==");

const car = {
    make: 'LG',
    model: 'Sedan',
    Trans: "Automatic",
};

if(car.hasOwnProperty('model')){
    console.log("Property exists in the object");
}
else{
    console.log("propert does not exist in the object");
}

//14. Get property values of an object [:: [' propertyName']] 
console.log("==Get property values of an object=="); 
console.log(car ['model'] );

//Clone an object
console.log("==Clone an object==");
const cloneCar = {...car};
console.log("clone object:", cloneCar);

//16. convert Object to array [:: Object.keys() && Object.values() && object.entries() methods]
console.log("==Convert Object to array==");
const keysArr= Object.keys(car);
console.log("Keys array: ", keysArr); // outputs: Keys array:  [ 'make', 'model', 'Trans' ]
const valueArr= Object.values(car);
console.log("Values array: ", valueArr); // outputs: Values array:  [ 'LG', 'Sedan', 'Automatic' ]
const entierArr= Object.entries(car);
console.log("Entries array: ",entierArr); // outputs: Entries array:  [ [ 'make', 'LG' ], [ 'model', 'Sedan' ], [ 'Trans', 'Automatic' ] ] 



