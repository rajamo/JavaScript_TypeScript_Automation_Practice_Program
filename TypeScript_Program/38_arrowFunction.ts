// Arrow => called fat Arrow  
// another way of anonumous function WITHOUT Name 
// Anonoumus function assigned to variable and called

console.log( "-- 1.Anonumos Function---");
   let Sum =function(a:number, b:number): number{
        return a+b;
    }

    console.log(Sum(1,5)); // Result 6

console.log("--- 2.Anonumous to Arrow Convertion---");

let sub =(a:number, b:number): number => { // {} this is optional 
        return a-b;
    }

    console.log(sub(5,1)); // Result 4

console.log("---** 3.Short Arrow Convertion**---");

let mul =(a:number, b:number): number => a*b;  // without Return otherwise need {}
console.log(mul(5,3)); // Result 15

console.log("--- 4.Class---");

class Person {  // NO Let, Const variable inside class - Restricated
    FirstName: string;
    Age: number;
     
    constructor(FirstName: string, Age: number){
        this.FirstName = FirstName;
        this.Age = Age;
    }

    display =() => console.log(this.FirstName+' ' +this.Age);
}

let p =  new Person("Raja", 40);
p.display();
