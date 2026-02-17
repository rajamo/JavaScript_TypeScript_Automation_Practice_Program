const emptyArray= [];
const numberArray= [1,2,3,4,5];
const stringArray= ["one", 'two', "three"];
const booleanArray= [true, false, true, false];
const mixedArray= [1, "two", true, 3.14, 'five', false];
const nestedArray= [[1,2], [3,4], [5,6]];


//1.Push method
console.log("==Push Method==")
emptyArray.push(10);  
emptyArray.push("JS",20,true);
console.log(emptyArray);// adds elements to the end of the array

//2. Pop method
console.log("==Pop Method==")
let poppedElement= emptyArray.pop();
console.log("Popped element: " + poppedElement);
console.log(emptyArray); // removes the last element of the array 

//3. Shift method
console.log("==Shift Method==")
let shiftedElement= emptyArray.shift();
console.log("Shifted element: " + shiftedElement);
console.log(emptyArray);  // removes the first element of the array

//4. Unshift method
console.log("==UnShift Method==")
emptyArray.unshift("Start", 5);
console.log(emptyArray); // adds elements to the beginning of the array

//5. Length property
console.log("==Length Property==")
console.log("Length of emptyArray: " + emptyArray.length);      

//6.Splice method
console.log("==Splice Method==")
console.log(emptyArray);
let splice = emptyArray .splice(1,2,"NewElement1","NewElement2");   
console.log("Spliced elements: " + splice);
console.log(typeof splice);
console.log(emptyArray);   // modify the original array at any index and will create a new array 

//7. Slice method
console.log("==Slice Method==")
let copySliceEmptyArray = emptyArray.slice(1,3);   
console.log(copySliceEmptyArray); // does not modify the original array and created a new array   
console.log(emptyArray);


//8.concat method
console.log("==Concat Method==")
let combinedArray = emptyArray.concat(stringArray, booleanArray);
console.log(combinedArray); // combines two or more arrays


//9.indexOf method      
console.log("==IndexOf Method==")
let index = combinedArray.indexOf(true);
console.log("Index of 'true': " + index); // returns the first index of a specified element   if not found returns -1 if duplicated return fist index 
console.log('==search next index of duplicated element==');
let nextIndex = combinedArray.indexOf(true,index + 1);
console.log("Next index of 'true': " + nextIndex); // search from a specified index for the next occurrence of the element

//10.lastIndexOf method
console.log("==LastIndexOf Method==")
let lastIndex = combinedArray.lastIndexOf(true);
console.log("Last index of 'true': " + lastIndex); // returns the last index of a specified element   if not found returns -1 if duplicated return last index       


//11.includes method
console.log("==Includes Method==")
let hasElement = combinedArray.includes("JS");
console.log("Array includes 'JS': " + hasElement); // returns true if the array contains a specified element, otherwise false       

//12. forEach method
console.log("==forEach Method==")   
combinedArray.forEach((element, index) => {
    console.log("Element at index " + index + ": " + element);
}   ); // executes a provided function once for each array element

//13. map method
console.log("==Map Method==")
console.log(numberArray);
let mappedArray = numberArray.map((x) => x * 2);
console.log("Mapped Array (elements multiplied by 2): " + mappedArray); // creates a new array with the results of calling a provided function on every element in the calling array 
console.log(mappedArray); // original array remains unchanged  

//14. filter method
console.log("==Filter Method==")
let filteredArray = numberArray.filter((x) => x > 2);
console.log("Filtered Array (elements greater than 2): " + filteredArray);  // creates a new array with all elements that pass the test implemented by the provided function    
console.log(filteredArray); // original array remains unchanged

//15. reduce method
console.log("==Reduce Method==")
let sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of elements in numberArray: " + sum); // executes a reducer function on each element of the array, resulting in a single output value
console.log(numberArray); // original array remains unchanged

//16. find method   
console.log("==Find Method==")
let foundElement = numberArray.find((x) => {return x > 3;});
console.log("First element greater than 3: " + foundElement); // returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned
console.log(numberArray); // original array remains unchanged   

let StringFind = stringArray.find((x) => x.startsWith("t"));  
console.log(stringArray);
console.log("First string starting with 't': " + StringFind); // works with string array as well
console.log(StringFind); // original array remains unchanged


//Every Method Example
console.log("==Every Method==")
let numArray = [10, 20, 30, 40, 50,101];
let flag = numArray.every((e)=> e>100);
console.log("Are all elements greater than 100?:", flag); // outputs: Are all elements greater than 100?: false

//Some Method Example
console.log("==Some Method==")
let numArr = [10, 20, 30, 40, 50,101];
let someFlag = numArr.some((e)=> e<100);
console.log("Is there any element greater than 100?:", someFlag); // outputs: Is there any element greater than 100?: true

//Reverse Method Example    
console.log("==Reverse Method==");  
let revArray = [1,2,3,4,5];
let resultOfRe= revArray.reverse();
console.log("Reversed Array:", resultOfRe); // outputs: Reversed Array: [ 5, 4, 3, 2, 1 ]

//Sort Method Example
console.log("==Sort Method==");
let sortArray = [40,100,1,5,25,10];
let sortedArrayAsc = sortArray.sort((a,b)=>a-b );
let sortedArrayDesc = sortArray.sort((a,b)=> b-a);
console.log("Sorted Array in Desc order:", sortedArrayDesc); // outputs: Sorted Array in Dec order: [ 1, 5, 10, 25, 40, 100 ]
console.log("Sorted Array in ascending order:", sortedArrayAsc); // outputs: Sorted Array in ascending order: [ 1, 5, 10, 25, 40, 100 ]

//7. Remove falsey values from an array (false, null, 0, "", undefined, and NaN) 
console.log("==Remove falsey values from an array==");
let mixArray = [0,1,false,2,'',3,null,undefined,4,NaN,5,true,6];
const truthyArray = mixArray.filter(Boolean);
console.log("Original Array:", mixArray); // outputs: Original Array: [ 0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5, true, 6 ]
console.log("Array after removing falsey values:", truthyArray); // outputs: Array after removing falsey values: [ 1, 2, 3, 4, 5, true, 6 ]

//10.Check id an array is empty or not [:: length property]
const arrayempty = [];
if (arrayempty.length === 0) {
    console.log("this array is empty")
}


//13. Join array elements into a string [:: join() method]
console.log("==Join array elements into a string==");
const joinArray = truthyArray.join(":");
console.log("Joined Array String:", joinArray); // outputs: Joined Array String: 1:2:3:4:5:true:6


//15. Clone an array  [:: spread operator]
console.log("==Clone an array==");
const cloneTruthyArray = [...truthyArray];
console.log("Cloned Array:", cloneTruthyArray); // outputs: Cloned Array: [ 1, 2, 3, 4, 5, true, 6 ]


//19. Turncat a array [:: length property]
console.log("==Turncat a array==");
const newArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Original Array:", newArray);
newArray.length = 8;
console.log("Truncated Array:", newArray); // outputs: Truncated Array: [ 1, 2, 3, 4, 5,6,7,8]


//20. find the last values of an array [:: slice() method]
const lastValue= newArray.slice(-1);
console.log("Last value of the array:", lastValue); // outputs: Last value of the array: 4