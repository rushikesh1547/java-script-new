
const userEmail = "r@rishi.ai"

// if (userEmail) {
//     console.log("Got user Email");
    
// }
// else{
//     console.log("Don't have userEmail");
    
// }

// falsy values

// false, 0 , "" , -0 , BigInt 0n , null , undefined ,   All are falsy values

// truthy values

// "0" , 'false' , " " => single space , [] , {} , function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

