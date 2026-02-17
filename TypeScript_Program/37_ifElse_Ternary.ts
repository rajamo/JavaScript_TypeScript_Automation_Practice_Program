//TS - 1. If else 
 
    let flag: boolean = true;
    if (flag){
        console.log("hi -true");
    }else 
    {
     console.log("hi - false");   
    }

console.log("-------If Else-----------");
    let x:number =10, y:number =193, z:number =19

    if (x>y && x>z){
        console.log("x is > than y,z");

    }else if (y>x && y>z)
    {
        console.log("y is > than x,z");
    }
    else {
        console.log("Z is > than x,y");


    }

    console.log("---Ternary--------");

    let a:number = 100, b:number =909;

    (a>b) ? console.log("a > than a") : console.log("b > than a");

    let browser: string = "edge";

    (browser ==="chrome") ? console.log("launch chrome") : (browser ==="ff") ? console.log("launch FF") : (browser===("Edge").toLocaleLowerCase()) ? console.log("launch Edge") : console.log("No Browserfound");
