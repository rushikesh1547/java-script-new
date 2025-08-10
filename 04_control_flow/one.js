// if

// const isUserLoggedIn = true
// const temprature = 41

// if(temprature < 50){
//     console.log("Less than 50");
    
// }
//  else
//     {console.log("temprature is greater the 50");

//     }
// < , > , <= , >= , == , != , === , !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }
//     console.log(`user power : ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test") , console.log("test2") most unreadable code

// if (balance < 500) {
//     console.log("less than 500");
    
// }
// else if (balance < 750)
// {

//     console.log("less than 750");
// }
// else if (balance < 900 ) {
    
//     console.log("less than 900");
// }
// else {
    
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
    
}
