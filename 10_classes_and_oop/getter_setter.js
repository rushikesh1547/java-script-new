class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const rsc = new User("rsc@google.in" , "abc")
console.log(rsc.password);
console.log(rsc.email);

