class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
      constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was addes by ${this.username}`);
        
    }
}

const rsc = new Teacher("rsc","rsc@rscoe.com" , "123")
rsc.addCourse()

const src = new User("src" , "src@google.com" , "1115")
src.logMe()

console.log(rsc === src);
console.log(rsc instanceof Teacher );
