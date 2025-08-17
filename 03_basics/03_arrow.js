const user = {
    username : "rushikesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }

}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);

// function one(){
//     let username = " Rushikesh"
//     // console.log(this.username); we can't access username by this keyword here
    
// }

// one();


// const chai = function () {
//     let username = " Rushikesh"
//     console.log(this.username);
// }

const chai =  ()  => {
    let username = " Rushikesh"
    console.log(this);
}

// chai()

// const addTwo=(num1 , num2) => {
//     return num1+num2
// }

// const addTwo=(num1 , num2) =>   num1+num2
// const addTwo=(num1 , num2) =>  ( num1+num2)

 const addTwo=(num1 , num2) =>  ({username: "Rushikesh"})


// console.log(addTwo(4,5))

const myArray = [2 ,5 ,3 ,7 ,8]

// myArray.forEach()