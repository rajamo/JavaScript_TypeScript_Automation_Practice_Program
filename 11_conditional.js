
    
function Agelimit(age){
  
    if (age>=16)
    {
        console.log("You are 16 or above so eligible for vote"); // age over 16 and above
        console.log(typeof(age));
    }
    else{
        console.log("You are under 16 so NOT eligible for vote");
        console.log(typeof(age));
    }    

}

Agelimit(8);
