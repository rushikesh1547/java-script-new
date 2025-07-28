// singleton 

//object literals

const mySym = Symbol("key1") // imp interview

const JSuser = {

    "name" : "Rushikesh",
    "full name": "Rushikesh Santosh Chandekar",
    [mySym] : "mykey1", // imp interview
    age: 18,
    Location : " Pune",
    email: "rushikesh@google.in",
    isLoggedIn: false,
    lastLoggedInDays : ["Monday", "Saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);// imp interview

JSuser.email =" rushikesh@microsoft.com"
// Object.freeze(JSuser)
JSuser.email =" rushikesh@chatgpt.com"
// console.log(JSuser);


JSuser.greeting = function()
{
    console.log("Hello JS user");
    
}
JSuser.greetingTwo = function()
{
    console.log(`Hello JS user , ${this.name}`); //string interpolation
    
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

