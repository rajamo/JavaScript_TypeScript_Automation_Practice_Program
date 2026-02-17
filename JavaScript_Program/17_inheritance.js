//JS doesnot support one child multiple parent inheritance directly.
//but we can achieve it using mixins or by combining multiple classes.

class AutomobileRegion{
    constructor(region){
        this.region = region;
    }

 getRegion(){
   console.log ("Region is:" + this.region);
 }
}

class Vehicle extends AutomobileRegion{
    constructor(model,type,year,region){
        super(region);
        this.model = model;
        this.type = type;
        this.year = year;
    
    }
getDetailsVehicle(){
    console.log( 'Model:' +this.model+ "Type:" +this.type + "Year:"+this.year);
}

}
class Car extends Vehicle{
    constructor(brand,model,type,year,region){
        super(model,type,year,region);
        this.brand = brand;
    }
    startEngine(){
        console.log("Engine of "+this.brand +" car started.");
    }
}
const mycar = new Car('Hyndai','i10','Auto','2025','UK');
//const mycar = new Car("i10");
mycar.startEngine();
mycar.getDetailsVehicle()
mycar.getRegion();

