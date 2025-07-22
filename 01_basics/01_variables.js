const accountId = 144553
let accountEmail = "rishi@gmail.com"
var accountPassword = "23456"
accountCity = "Chandrapur"
let accountState;

//accountId = 2//not allowed


accountEmail = "rsc@rsc.com"
accountPassword = 150407
accountCity = "Pune"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])