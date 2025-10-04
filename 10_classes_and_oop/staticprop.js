class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const rishi = new User("rishi")
// console.log(rishi.createId());

class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "ios@iphone.com")

console.log(iphone.createId());

