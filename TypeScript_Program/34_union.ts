// union operatore

let userId : (string | number | boolean| null);
userId = "dddf9";
userId = 2233;
userId = null; 

function getdetails (custId:(string | number)): any{
if (typeof (custId) === 'number'){
    return custId +"_number";
}
else if (typeof (custId)=== "string")
{
 return custId+"_String"
}
}


let detaisl = getdetails ("8900");
console.log(detaisl);


