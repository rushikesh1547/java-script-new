// Immediately invoked Function Expression (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
    
})();
//due to problem of pollution of global scope we use iife to reduce it//imp

( (name) => {
    //normal or unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Rushikesh')