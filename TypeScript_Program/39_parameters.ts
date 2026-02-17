// Function Parameters - 1. Mandatory ; 2.Optional ; 3. Default 


console.log("---1.Mandatory Para--");

function Concot(firstname:string, age:number){
    return firstname+' '+age;

}
 console.log(Concot("raja",40)); // complusory pass 2 Para here

console.log("---2.Optional Para--");

function ConcotOpt(firstname:string, age?:number){
    return firstname+' '+age;

}
console.log(ConcotOpt("raja")); // complusory pass first Para here not 2nd Para becuase ? Optional 

console.log("---3.Default Para----"); // Default should be first PARA of the functoions.
 
function MsgPrint (username: string, msg: string ="Welcome"){
    return msg+ " " +username;
}

console.log(MsgPrint("Raja"));
console.log(MsgPrint("Baby", "Hello"));
