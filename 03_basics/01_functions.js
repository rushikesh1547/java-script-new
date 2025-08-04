function sayMyName() {
    console.log("R");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");

    
}

// sayMyName()

// function addTwoNos(no1 , no2){
//     console.log(no1+no2);
    
// }

// addTwoNos(4,"a")
// addTwoNos(4,"5")
// addTwoNos(4,null)

function addTwoNos(no1 , no2){
   
    // let result = no1 + no2
    // return result

    return no1 + no2
}
const result  = addTwoNos(4,5)
// console.log("Result: ", result); // value shows undefined

function loginUserMessage(username){
    if(username === undefined){

        console.log("Please Enter Username");
        return 

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rushikesh"))
console.log(loginUserMessage("RUSHIKESH"))