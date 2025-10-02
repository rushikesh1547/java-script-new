// let myName = "rushikesh     "

// console.log(myName.truelength);

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

        getSpiderPower: function(){
            console.log(`Spidy power is ${this.spiderman}`);
        }
}

Object.prototype.rushikesh = function(){
    console.log(`rushikesh is present in all object`);
    
}

Array.prototype.heyRushikesh = function(){
    console.log(`rushikesh say hello`);
    
}

// heroPower.rushikesh()

myHeros.rushikesh()
myHeros.heyRushikesh()
// heroPower.heyRushikesh() //this is not possible

// inheritance

const User = {
    name: "chai",
    email:"chai@google.com"
}


const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "rishichandekar       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"rushikesh".trueLength()
"coldCoffee".trueLength()