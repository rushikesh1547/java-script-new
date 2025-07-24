// 1.Primitive Datatypes

// 7 types: String , Number, Boolean, NUll, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 3467848965863612n

// 2.Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name :"Rusikesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Rushikeshyt"

let anotherName = myYoutubeName

anotherName = "RSC YT"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@axl"
}

let userTwo = userOne

userTwo.email = "rushikesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



