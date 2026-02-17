class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log("Engine start for", this.make, "and the model is: ", this.model);   
    }
}

class BMW extends Car{
    constructor(make, model, trans){
        super(make,model);
        this.trans = trans;
    }

    startEngine(){
        console.log("Engine start for", this.make, "and the model is: ", this.model, "Trans type is:", this.trans);  
    }
}

const myCar = new BMW("German","2025","CVT");
myCar.startEngine();
const parentCar = new Car("Toyota","2020");
parentCar.startEngine();

