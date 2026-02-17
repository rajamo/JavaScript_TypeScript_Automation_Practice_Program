
//*******Statics prope and function call by Class name, non static things call by Objects name******** */
//static keyword is used to define a static property or method for a class.
//Static properties are often used to store data that is COMMON to all instances of a class, such as configuration settings or constants.
//Static properties are called on the CLASS itself, not on instances of the class. 
//Static properties can be accessed using the CLASS NAME, without creating an instance of the class.
//Static members are called on the CLASS itself, not on instances of the class. 
//Static methods are often used to define utility functions that are related to a class but do not require access to instance-specific data.
//Static members can be accessed using the CLASS NAME, without creating an instance of the class.
//Static members are shared among all instances of a class.
//Static members can be inherited by subclasses.

class Car{
    static wheels = 4;
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }
    static start(){
        console.log("Car started");
    }

    drive(){
        console.log(`${this.name} is driving`);
    }
}

class EleCar extends Car{
    constructor(name, model, price, batteryCapacity){
        super(name, model, price);
        this.batteryCapacity = batteryCapacity;
    }

    static charge(){
        console.log("Electric car is charging");
    }

}

const myCar = new Car('Toyota', 'Camry', 30000);
myCar.drive();
//myCar.start(); // Error: start is not a function
Car.start(); // Car started
console.log(`A car has ${Car.wheels} wheels`); // A car has 4 wheels


const eCar = new EleCar('Tesla', 'Model S', 80000, '100 kWh');
eCar.drive();
EleCar.charge();
console.log("Ev Car wheels: ", EleCar.wheels);



