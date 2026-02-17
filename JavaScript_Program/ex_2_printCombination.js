let str = 'abc';
let combi = []; // this will hold all the combinations


// 1.individual character push

for (let i=0; i<str.length; i++){
    combi.push(str[i]);
};

// 2.combinations of two characters push
for(let i=0; i<str.length; i++){

    for(let j=0; j<str.length; j++){
        if(i!==j){
            combi.push(str[i]+str[j]);
        }
    } 

};

//3.combinations of three characters push
combi.push(str); // only one combination possible for 3 characters


console.log('All combinations are: ',combi);