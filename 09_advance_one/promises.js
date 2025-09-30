// const promiseOne = new Promise(function(resolve , reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
        
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Promise task 2 consumed');
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "RSC", emai: "rsc@example.com"});

//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:'rushikesh', password: '1234'})
//         }else{
//             reject('error:something went wrong')
//         }
//     },1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((myusername) => {
//     console.log(myusername);   
// })
// .catch(function(error){
//     console.log(error); 
// })
// .finally(() => {
//     console.log('The promise is either resolved or rejected');    
// })

// const promiseFive = new Promise(function(resolve, reject){
//      setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:'Javascript', password: '1234'})
//         }else{
//             reject('error:JS went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
//     }
//     catch (error){
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
//     }
//     catch (error){
//         console.log('E: ',error);
        
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)

// a fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issues or similar)
// . A fetch() promise does not reject on HTTP errors (404 , etc). Instead, A then handler must check the Response.ok and/or Response.status properties
