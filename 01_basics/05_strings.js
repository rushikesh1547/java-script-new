const name = "Rushikesh"
const repoCount = 5

// console.log(name + repoCount + "Value");

// console.log(`Hello ny name is ${name} and my repo count is ${repoCount}`);  //Concatination of strings

const gameName = new String("rushikesh-rc-com")

// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4) //The last value is not included
// console.log(newString);

const anotherString = gameName.slice(-8, 4) //-ve values can be used in slice only
console.log(anotherString);

const newStringOne = "    rushi    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove excess spaces

const url = "https://rushikesh.com/rushikesh%20chandekar"

// console.log(url.replace('%20', '-'));

// console.log(url.includes('fat'));

// console.log(gameName.split('-'));

